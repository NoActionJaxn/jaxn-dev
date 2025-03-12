import classNames from "classnames";
import { useState, useEffect } from "react";

interface TypingSimulatorProps {
  text: string,
  className?: string;
  speed?: number
}

export function TypingSimulator({ className, speed = 100, text }: TypingSimulatorProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  const shouldFlash = text === displayedText;

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.slice(0, i + 1));
        i++;
      }
    }, speed);

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span className={classNames(className, { 'opacity-0': shouldFlash && showCursor })}> &#9608;</span>
    </span>
  );
}
