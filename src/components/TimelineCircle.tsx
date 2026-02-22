import { CSSProperties, useState } from "react";
import type { TimelinePeriod } from "../types/timeline";
import { TimelinePoint } from "./TimelinePoint";
import { CIRCLE } from "../constants/timeline";

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
    <div style={styles.circleBlock}>
      <div
        style={{
          ...styles.circle,
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
      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  circleBlock: {
    position: "absolute",
    left: "50%",
    top: "43%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
  },

  circle: {
    position: "relative",
    width: `${CIRCLE.SIZE}px`,
    height: `${CIRCLE.SIZE}px`,
    border: "1px solid rgba(66, 86, 122, 0.2)",
    borderRadius: "50%",
  },
};