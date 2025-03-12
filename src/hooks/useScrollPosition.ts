import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export function useScrollPosition(debounceDelay: number = 100) {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    }, debounceDelay);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll.cancel(); // Cancel any pending debounced calls
      window.removeEventListener("scroll", handleScroll);
    };
  }, [debounceDelay]);

  return scrollPosition;
}