import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import type { Swiper as SwiperType } from "swiper";
import type { TimelineEvent } from "../../types/timeline";

import * as S from "./styles";
import { TimelineControls } from "../timeline-controls";

interface Props {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  events: TimelineEvent[];
  swiper: SwiperType | null;
  activePage: number;
  pagesCount: number;
}

export const TimelineMobileControls = ({
  current,
  total,
  onNext,
  onPrev,
  events,
  swiper,
  activePage,
  pagesCount,
}: Props) => {
  const formatNum = (n: number) => n.toString().padStart(2, "0");
  return (
    <S.TimelineMobileControls>
      <TimelineControls
        current={current}
        total={total}
        onNext={onNext}
        onPrev={onPrev}
      />

      <S.SliderDotsWrapper>
        {Array.from({ length: pagesCount }).map((_, index) => (
          <S.SliderDots
            key={index}
            $isActive={index === activePage}
            onClick={() =>
              swiper?.slideTo(index * (swiper?.params.slidesPerGroup || 1))
            }
          />
        ))}
      </S.SliderDotsWrapper>
    </S.TimelineMobileControls>
  );
};
