import { CSSProperties } from "react";
import * as S from "./styles";

interface TimelinePointProps {
  id: number;
  x: number;
  y: number;
  number: number;
  rotation: number;
  isActive: boolean;
  isHovered: boolean;
  category: string;
  onHover: (id: number | null) => void;
  onClick: (id: number) => void;
}

export const TimelinePoint = ({
  id,
  x,
  y,
  number,
  rotation,
  isActive,
  isHovered,
  category,
  onHover,
  onClick,
}: TimelinePointProps) => {
  
  const showFull = isActive || isHovered;

  const containerStyle: CSSProperties = {
    position: "absolute",
    left: x,
    top: y,
    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
    transition: "transform 1s ease",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(id)}
    >
      <S.Dot $isVisible={showFull} />

      <S.Badge $isVisible={showFull}>
        {number}
      </S.Badge>

      <S.CategoryName $isVisible={isActive}>
        {category}
      </S.CategoryName>
    </div>
  );
};