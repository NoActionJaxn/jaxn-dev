import { useState, useEffect } from "react";

interface useScrollPositionProps {
  debounce: number;
};

function useScrollPosition({ debounce = 100 }: useScrollPositionProps) {
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
      }, debounce);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [debounce]);

  return scrollPosition;
};

export default useScrollPosition;