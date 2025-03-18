import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import useMenu from "./hooks/useMenu";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(({
  className,
  ...rest
}, ref) => {
  const { toggleMenu, isMenuOpen } = useMenu();

  return (
    <button
      ref={ref}
      className={classNames(className, "relative size-16 flex items-center justify-center cursor-pointer rounded-full border-4 border-stone-900")}
      onClick={toggleMenu}
      {...rest}
    >
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        className="relative w-6 h-5 flex flex-col justify-between"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 },
          }}
          className="block w-full h-1 bg-stone-900 rounded origin-center"
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="block w-full h-1 bg-stone-900 rounded"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 },
          }}
          className="block w-full h-1 bg-stone-900 rounded origin-center"
        />
      </motion.div>
    </button>
  )
});

export default MenuButton;
