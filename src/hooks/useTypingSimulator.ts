import { useState, useEffect } from "react";

function useTypingSimulator(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = displayedText.length;
    let isDeleting = displayedText.length > 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      if (isDeleting) {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          index--;
        } else {
          isDeleting = false;
          index = 0;
        }
      } else {
        if (index < text.length) {
          setDisplayedText((prev) => text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayedText, showCursor: isTyping || showCursor };
}

export default useTypingSimulator;
