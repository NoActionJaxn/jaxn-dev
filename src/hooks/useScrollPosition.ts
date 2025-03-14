import { useState, useEffect } from "react";

export function useScrollPosition(debounceDelay: number = 100) {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    let timeoutId: number;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      };

      timeoutId = setTimeout(() => {
        setScrollPosition({
          scrollX: window.scrollX,
          scrollY: window.scrollY,
        });
      }, debounceDelay);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [debounceDelay]);

  return scrollPosition;
};
