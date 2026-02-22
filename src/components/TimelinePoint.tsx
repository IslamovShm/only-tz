import { CSSProperties } from "react";

interface TimelinePointProps {
  id: number;
  x: number;
  y: number;
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
  rotation,
  isActive,
  isHovered,
  category,
  onHover,
  onClick,
}: TimelinePointProps) => {
  const pointStyle: CSSProperties = {
    position: "absolute",
    left: x,
    top: y,
    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
    cursor: "pointer",
  };

  if (isActive) {
    return (
      <div
        style={pointStyle}
        onMouseEnter={() => onHover(id)}
        onMouseLeave={() => onHover(null)}
      >
        <div style={styles.badge}>
          <span>{id}</span>
        </div>
        <p style={styles.categoryName}>{category}</p>
      </div>
    );
  }

  return (
    <button
      style={{ ...pointStyle, background: "none", border: "none", padding: 0 }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(id)}
    >
      {isHovered ? (
        <div style={styles.badge}>
          <span>{id}</span>
        </div>
      ) : (
        <div style={styles.dot} />
      )}
    </button>
  );
};

const styles: Record<string, CSSProperties> = {
  dot: {
    borderRadius: "50%",
    backgroundColor: "#42567A",
    width: "6px",
    height: "6px",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "56px",
    height: "56px",
    backgroundColor: "#F4F5F9",
    border: "1px solid rgba(66, 86, 122, 0.5)",
    borderRadius: "50%",
    fontSize: "14px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  categoryName: {
    position: "absolute",
    top: "-9px",
    left: "45px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#42567A",
    whiteSpace: "nowrap",
  },
};
