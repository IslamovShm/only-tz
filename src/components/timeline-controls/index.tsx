import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

import * as S from "./styles";

interface Props {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

export const TimelineControls = ({ current, total, onNext, onPrev }: Props) => {
  const formatNum = (n: number) => n.toString().padStart(2, "0");
  return (
    <S.TimelineControls>
      <S.Fraction>
        {formatNum(current)}/{formatNum(total)}
      </S.Fraction>
      <S.NavButtons>
        <S.NavBtn
          onClick={onPrev}
          disabled={current === 1}
          aria-label="Previous timeline event"
        >
          <IoChevronBackOutline />
        </S.NavBtn>
        <S.NavBtn
          onClick={onNext}
          disabled={current === total}
          aria-label="Next timeline event"
        >
          <IoChevronForward />
        </S.NavBtn>
      </S.NavButtons>
    </S.TimelineControls>
  );
};
