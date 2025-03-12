import { useState, useEffect } from "react";

interface ElementPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function useElementPosition(ref?: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<ElementPosition>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      if (ref?.current) {
        const { x, y, width, height } = ref.current.getBoundingClientRect();
        setPosition({ x, y, width, height });
      }
    };

    updatePosition(); // Initial position
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [ref]);

  console.log({ position });
  
  return position;
}
