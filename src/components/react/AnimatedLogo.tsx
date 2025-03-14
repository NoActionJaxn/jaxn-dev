import classNames from "classnames";
import { useTypingSimulator } from "../../hooks/useTypingSimulator"
import { COLORS } from "../../lib/constants/tailwind";

export function AnimatedLogo() {
  const { displayedText, showCursor } = useTypingSimulator('jaxn.dev');

  return (
    <span className={classNames("pointer-events-none select-none font-bold !text-3xl", COLORS.PAGE.TEXT)}>
      <span>{displayedText}</span>
      <span className={classNames({ hidden: showCursor })}> &#9608;</span>
    </span>
  );
}
