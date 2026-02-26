import { CSSProperties, useState } from "react";
import type { TimelinePeriod } from "../../types/timeline";
import { TimelinePoint } from "../timeline-point";
import { CIRCLE } from "../../constants/timeline";

import * as S from "./styles";

interface TimelineCircleProps {
  data: TimelinePeriod[];
  activeId: number;
  rotation: number;
  onSelect: (id: number) => void;
}

export const TimelineCircle = ({
  data,
  activeId,
  rotation,
  onSelect,
}: TimelineCircleProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <S.CircleBlock>
      <S.Circle
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 1s ease",
        }}
      >
        {data.map((item, index) => {
          const angle = ((index * 360) / data.length) * (Math.PI / 180);
          const x = CIRCLE.CX + CIRCLE.R * Math.cos(angle);
          const y = CIRCLE.CY + CIRCLE.R * Math.sin(angle);

          return (
            <TimelinePoint
              key={item.id}
              id={item.id}
              number={index + 1}
              x={x}
              y={y}
              rotation={rotation}
              isActive={item.id === activeId}
              isHovered={hovered === item.id}
              category={item.category}
              onHover={setHovered}
              onClick={onSelect}
            />
          );
        })}
      </S.Circle>
    </S.CircleBlock>
  );
};