import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  value: number;
}

export const YearCounter = ({ value }: Props) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(0);

  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    tweenRef.current?.kill();
    const obj = { val: prevValue.current };
    tweenRef.current = gsap.to(obj, {
      val: value,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        node.textContent = Math.round(obj.val).toString();
      },
    });
    prevValue.current = value;

    return () => {
      tweenRef.current?.kill();
    };
  }, [value]);

  return <span ref={nodeRef}>{value}</span>;
};
