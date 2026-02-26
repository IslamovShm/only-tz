import { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useCircleRotation } from "../../hooks/useCircleRotation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MOBILE_BREAKPOINT } from "../../constants/timeline";
import { TimelineCircle } from "../timeline-circle";
import { TimelineSlider } from "../timeline-slider";
import { YearCounter } from "../YearCounter";
import { TimelineControls } from "../timeline-controls";
import { TimelineMobileControls } from "../timeline-mobile-controls";
import { TIMELINE_DATA } from "../../data/timelineData";

import * as S from "./styles";

export default function TimelineBlock() {
  const data = TIMELINE_DATA;
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const totalSteps = data.length;
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const { rotation, rotateTo } = useCircleRotation(data);

  const { activeItem, activeIndex } = useMemo(() => {
    const idx = data.findIndex((item) => item.id === activeCategory);
    return {
      activeItem: data[idx]!,
      activeIndex: idx + 1,
    };
  }, [data, activeCategory]);

  const handleSelect = useCallback(
    (id: number) => {
      setActiveCategory(id);
      rotateTo(id);
    },
    [rotateTo],
  );

  const handleNext = useCallback(() => {
    const currentIndex = data.findIndex((item) => item.id === activeCategory);
    const nextIndex = (currentIndex + 1) % totalSteps;
    handleSelect(data[nextIndex].id);
  }, [activeCategory, data, handleSelect, totalSteps]);

  const handlePrev = useCallback(() => {
    const currentIndex = data.findIndex((item) => item.id === activeCategory);
    const prevIndex = (currentIndex - 1 + totalSteps) % totalSteps;
    handleSelect(data[prevIndex].id);
  }, [activeCategory, data, handleSelect, totalSteps]);

  useEffect(() => {
    rotateTo(activeCategory);
  }, [activeCategory, rotateTo]);

  return (
    <section style={{ padding: "0px 20px", overflow: "hidden" }}>
      <S.Container>
        <S.V_LINE aria-hidden />

        <S.TitleBlock>
          <S.TitleAccent aria-hidden />
          <S.Title>
            Исторические <br /> даты
          </S.Title>
        </S.TitleBlock>

        <S.YearsContainer>
          <S.Years>
            <S.Blue>
              <YearCounter value={activeItem.startYear} />
            </S.Blue>
            <S.Pink>
              <YearCounter value={activeItem.endYear} />
            </S.Pink>
          </S.Years>

          <S.H_LINE aria-hidden />

          <S.CircleWrapper>
            <TimelineCircle
              data={data}
              activeId={activeCategory}
              rotation={rotation}
              onSelect={handleSelect}
            />
          </S.CircleWrapper>
        </S.YearsContainer>

        <S.EventsBlock>
          {!isMobile && (
            <TimelineControls
              current={activeIndex}
              total={totalSteps}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}

          <TimelineSlider
            events={activeItem.events}
            categoryId={activeCategory}
            setActivePage={setActivePage}
            setPagesCount={setPagesCount}
            setSwiper={setSwiper}
          />

          {isMobile && (
            <TimelineMobileControls
              current={activeIndex}
              total={totalSteps}
              onNext={handleNext}
              onPrev={handlePrev}
              events={activeItem.events}
              swiper={swiper}
              activePage={activePage}
              pagesCount={pagesCount}
            />
          )}
        </S.EventsBlock>
      </S.Container>
    </section>
  );
}
