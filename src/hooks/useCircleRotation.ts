import { useState, useCallback } from "react";
import type { TimelinePeriod } from "../types/timeline";
import { ANCHOR_ID } from "../constants/timeline";

function getAngleDeg(index: number, total: number): number {
  return (index * 360) / total;
}

function getTargetRotation(id: number, data: TimelinePeriod[]): number {
  const clickedIndex = data.findIndex((item) => item.id === id);
  const anchorIndex = data.findIndex((item) => item.id === ANCHOR_ID);

  return (
    getAngleDeg(anchorIndex, data.length) -
    getAngleDeg(clickedIndex, data.length)
  );
}

function normalizeRotation(current: number, target: number): number {
  let diff = target - current;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return current + diff;
}

interface UseCircleRotationReturn {
  rotation: number;
  rotateTo: (id: number) => void;
}

export function useCircleRotation(
  data: TimelinePeriod[],
): UseCircleRotationReturn {
  const [rotation, setRotation] = useState(0);

  const rotateTo = useCallback(
    (id: number) => {
      const target = getTargetRotation(id, data);
      setRotation((prev) => normalizeRotation(prev, target));
    },
    [data],
  );

  return { rotation, rotateTo };
}
