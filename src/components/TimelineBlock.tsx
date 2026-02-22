import { CSSProperties, useCallback } from "react";
import { TIMELINE_DATA } from "../data/timelineData";
import { useCircleRotation } from "../hooks/useCircleRotation";
import { useSwiper } from "../hooks/useSwiper";
import { TimelineCircle } from "./TimelineCircle";
import { TimelineSlider } from "./TimelineSlider";
import { useState } from "react";

export default function TimelineBlock() {
  const data = TIMELINE_DATA;
  const [activeCategory, setActiveCategory] = useState<number>(6);

  const { rotation, rotateTo } = useCircleRotation(data);
  const swiper = useSwiper();

  const activeItem = data.find((item) => item.id === activeCategory)!;

  const handleSelect = useCallback(
    (id: number) => {
      setActiveCategory(id);
      rotateTo(id);
      swiper.reset();
    },
    [rotateTo, swiper],
  );

  return (
    <section style={styles.timelineSection}>
      <div style={styles.container}>
        <div style={styles.vLine} aria-hidden />
        <div style={styles.hLine} aria-hidden />

        <div style={styles.titleBlock}>
          <div style={styles.titleAccent} aria-hidden />
          <h1 style={styles.title}>
            Исторические <br /> даты
          </h1>
        </div>

        <div style={styles.years} aria-live="polite">
          <span style={styles.blue}>{activeItem.startYear}</span>
          <span style={styles.pink}>{activeItem.endYear}</span>
        </div>

        <TimelineCircle
          data={data}
          activeId={activeCategory}
          rotation={rotation}
          onSelect={handleSelect}
        />

        <TimelineSlider
          events={activeItem.events}
          categoryId={activeCategory}
          currentSlide={swiper.currentSlide}
          totalPages={swiper.totalPages}
          isBeginning={swiper.isBeginning}
          isEnd={swiper.isEnd}
          onSwiper={swiper.onSwiper}
          onSlideChange={swiper.onSlideChange}
          onPrev={swiper.slidePrev}
          onNext={swiper.slideNext}
        />
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  timelineSection: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },

  container: {
    position: "relative",
    maxWidth: "1440px",
    width: "100%",
    minHeight: "100vh",
    margin: "0 auto",
    padding: "130px 80px 0",
    borderLeft: "1px solid rgba(66, 86, 122, 0.2)",
    borderRight: "1px solid rgba(66, 86, 122, 0.2)",
  },

  vLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "1px",
    backgroundColor: "#42567A",
    opacity: 0.2,
    transform: "translateX(-50%)",
  },

  hLine: {
    position: "absolute",
    top: "43%",
    left: 0,
    right: 0,
    height: "1px",
    backgroundColor: "#42567A",
    opacity: 0.2,
    transform: "translateY(-50%)",
  },

  titleBlock: {
    position: "relative",
    zIndex: 10,
    width: "fit-content",
  },

  titleAccent: {
    position: "absolute",
    left: "-80px",
    top: "4px",
    width: "5px",
    bottom: 0,
    background: "linear-gradient(180deg, #3877EE 0%, #EF5DA8 100%)",
    borderRadius: "2px",
  },

  title: {
    fontSize: "56px",
    fontWeight: "700",
    color: "#42567A",
    lineHeight: 1.1,
    marginBottom: "40px",
  },

  years: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "137px",
  },

  blue: {
    color: "#5D5FEF",
    fontWeight: "700",
    fontSize: "200px",
  },

  pink: {
    color: "#EF5DA8",
    fontWeight: "700",
    fontSize: "200px",
  },
};
