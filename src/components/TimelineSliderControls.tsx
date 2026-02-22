import { CSSProperties } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

interface TimelineSliderControlsProps {
  currentSlide: number;
  totalPages: number;
  isBeginning: boolean;
  isEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const TimelineSliderControls = ({
  currentSlide,
  totalPages,
  isBeginning,
  isEnd,
  onPrev,
  onNext,
}: TimelineSliderControlsProps) => {
  return (
    <div style={styles.sliderControls}>
      <p style={styles.fraction}>
        <span style={styles.fractionCurrent}>
          {String(currentSlide).padStart(2, "0")}
        </span>
        <span style={styles.fractionTotal}>
          /{String(totalPages).padStart(2, "0")}
        </span>
      </p>
      <div style={styles.navButtons}>
        <button
          style={{
            ...styles.navBtn,
            ...(isBeginning ? styles.navBtnDisabled : {}),
          }}
          onClick={onPrev}
          disabled={isBeginning}
          aria-label="Previous slide"
        >
          <IoChevronBackOutline />
        </button>
        <button
          style={{ ...styles.navBtn, ...(isEnd ? styles.navBtnDisabled : {}) }}
          onClick={onNext}
          disabled={isEnd}
          aria-label="Next slide"
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  sliderControls: {
    marginBottom: "56px",
  },

  fraction: {
    color: "#42567A",
    fontWeight: "400",
    fontSize: "14px",
    marginBottom: "20px",
  },

  navButtons: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  navBtn: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid rgba(66, 86, 122, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#42567A",
    fontSize: "20px",
    background: "none",
    transition: "opacity 0.2s",
  },

  navBtnDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
};
