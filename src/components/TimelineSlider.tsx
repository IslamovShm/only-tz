import { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { IoChevronForward } from "react-icons/io5";
import type { TimelineEvent } from "../types/timeline";
import { TimelineSliderControls } from "./TimelineSliderControls";

interface TimelineSliderProps {
  events: TimelineEvent[];
  categoryId: number;
  currentSlide: number;
  totalPages: number;
  isBeginning: boolean;
  isEnd: boolean;
  onSwiper: (swiper: SwiperType) => void;
  onSlideChange: (swiper: SwiperType) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const TimelineSlider = ({
  events,
  categoryId,
  currentSlide,
  totalPages,
  isBeginning,
  isEnd,
  onSwiper,
  onSlideChange,
  onPrev,
  onNext,
}: TimelineSliderProps) => {
  return (
    <div>
      <TimelineSliderControls
        currentSlide={currentSlide}
        totalPages={totalPages}
        isBeginning={isBeginning}
        isEnd={isEnd}
        onPrev={onPrev}
        onNext={onNext}
      />

      <div style={styles.swiperBlock}>
        <Swiper
          key={categoryId}
          slidesPerView={3.4}
          spaceBetween={80}
          modules={[Pagination, Navigation]}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        >
          {events.map((event) => (
            <SwiperSlide key={event.year}>
              <div style={styles.slide}>
                <h2 style={styles.year}>{event.year}</h2>
                <p style={styles.text}>{event.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          style={styles.nextBtn}
          onClick={onNext}
          aria-label="Next slide"
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  swiperBlock: {
    position: "relative",
  },

  slide: {},

  year: {
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: "25px",
    color: "#3877EE",
    fontWeight: "400",
    marginBottom: "15px",
  },

  text: {
    fontWeight: "400",
    fontSize: "20px",
    color: "#42567A",
    lineHeight: "30px",
  },

  nextBtn: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#3877EE",
    boxShadow: "0 0 15px rgba(56, 119, 238, 0.2)",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: "-60px",
    transform: "translateY(-50%)",
    zIndex: 100,
  },
};