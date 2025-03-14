import classNames from "classnames";
import { motion } from "framer-motion";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { COLORS } from "../../lib/constants/tailwind";

const ANIMATED_STATES = {
  'OPEN': 'open',
  'CLOSED': 'closed',
};

const HAMBURGER_CLASSES = "block w-full h-1 rounded";

export interface MenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  isOpen?: boolean
  className?: string;
};

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(({
  className,
  isOpen,
  type = "button",
  ...rest
}, ref) => {

  return (
    <button
      ref={ref}
      className={
        classNames(
          className,
          COLORS.MENU_BUTTON.BACKGROUND,
          "flex items-center justify-center size-18 rounded-full cursor-pointer"
        )}
      type={type}
      {...rest}
    >
      <motion.span
        initial={false}
        animate={isOpen ? ANIMATED_STATES.OPEN : ANIMATED_STATES.CLOSED}
        className="relative w-7 h-5 flex flex-col justify-between"
      >
        <motion.span
          variants={{
            [ANIMATED_STATES.CLOSED]: { rotate: 0, y: 0 },
            [ANIMATED_STATES.OPEN]: { rotate: 45, y: 8 },
          }}
          className={classNames(HAMBURGER_CLASSES, COLORS.MENU_BUTTON.HAMBURGER, "origin-center")}
        />

        <motion.span
          variants={{
            [ANIMATED_STATES.CLOSED]: { opacity: 1 },
            [ANIMATED_STATES.OPEN]: { opacity: 0 },
          }}
          className={classNames(HAMBURGER_CLASSES, COLORS.MENU_BUTTON.HAMBURGER)}
        />

        <motion.span
          variants={{
            [ANIMATED_STATES.CLOSED]: { rotate: 0, y: 0 },
            [ANIMATED_STATES.OPEN]: { rotate: -45, y: -8 },
          }}
          className={classNames(HAMBURGER_CLASSES, COLORS.MENU_BUTTON.HAMBURGER, "origin-center")}
        />
      </motion.span>
      <span className="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
    </button>
  );
});
