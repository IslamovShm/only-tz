import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  value: number;
}

export const YearCounter = ({ value }: Props) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(0);

  useEffect(() => {
    const node = nodeRef.current;
    console.log(node);
    if (!node) return;

    const obj = { val: prevValue.current };

    gsap.to(obj, {
      val: value,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        node.textContent = Math.round(obj.val).toString();
      },
    });

    prevValue.current = value;
  }, [value]);

  return <span ref={nodeRef}>{value}</span>;
};