import classNames from "classnames";
import { useTypingSimulator } from "../../hooks/useTypingSimulator"
import { COLORS } from "../../lib/constants/tailwind";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { motion } from "framer-motion";
import { ROUTES } from "../../lib/constants/routes";

const SCROLL_THRESHOLD = 5;

export function AnimatedLogo() {
  const { scrollY } = useScrollPosition(1);
  const { displayedText, showCursor } = useTypingSimulator('jaxn.dev');

  const opacity = scrollY > SCROLL_THRESHOLD ? Math.max(1 - (scrollY - SCROLL_THRESHOLD) / 200, 0) : 1;

  return (
    <motion.a
      className={classNames("block w-min h-min", { hidden: opacity <= 0 })}
      href={ROUTES.home.url}
      style={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      <span className={classNames("flex gap-3 pointer-events-none select-none font-bold !text-3xl", COLORS.PAGE.TEXT)}>
        <span>{displayedText}</span>
        <span className={classNames({ hidden: showCursor })}>&#9608;</span>
      </span>
    </motion.a>
  );
}
