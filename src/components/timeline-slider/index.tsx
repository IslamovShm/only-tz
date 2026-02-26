import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import type { TimelineEvent } from "../../types/timeline";
import gsap from "gsap";

import * as S from "./styles";
import { useLayoutEffect, useRef, useState } from "react";

interface TimelineSliderProps {
  events: TimelineEvent[];
  categoryId: number;
  setActivePage: (page: number) => void;
  setPagesCount: (count: number) => void;
  setSwiper: (swiper: SwiperType) => void;
}

export const TimelineSlider = ({
  events,
  categoryId,
  setActivePage,
  setPagesCount,
  setSwiper,
}: TimelineSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const [displayEvents, setDisplayEvents] = useState(events);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const updateStates = (swiper: SwiperType) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    const slidesPerView =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1;
    const slidesPerGroup =
      typeof swiper.params.slidesPerGroup === "number"
        ? swiper.params.slidesPerGroup
        : 1;
    const pages =
      Math.round((swiper.slides.length - slidesPerView) / slidesPerGroup) + 1;

    setPagesCount(pages);
    setActivePage(Math.floor(swiper.activeIndex / slidesPerGroup));
  };

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tl = gsap.timeline();

    tl.to(el, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setDisplayEvents(events);
        setIsStart(true);
        setIsEnd(false);
      },
    }).to(el, {
      opacity: 1,
      duration: 0.6,
      delay: 0.6,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, [categoryId, events]);

  return (
    <div ref={containerRef}>
      <S.SliderBlock>
        <Swiper
          key={categoryId}
          slidesPerView={3.4}
          spaceBetween={80}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setSwiper(swiper);
            updateStates(swiper);
          }}
          onSlideChange={(swiper) => {
            updateStates(swiper);
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 40,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 80,
              slidesPerGroup: 3,
            },
          }}
        >
          {displayEvents.map((event) => (
            <SwiperSlide key={event.year}>
              <S.Slide>
                <S.Year>{event.year}</S.Year>
                <S.Text>{event.text}</S.Text>
              </S.Slide>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.PrevBtn
          disabled={isStart}
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="Previous slide"
        >
          <IoChevronBack />
        </S.PrevBtn>
        <S.NextBtn
          disabled={isEnd}
          onClick={() => swiperInstance?.slideNext()}
          aria-label="Next slide"
        >
          <IoChevronForward />
        </S.NextBtn>
      </S.SliderBlock>
    </div>
  );
};
