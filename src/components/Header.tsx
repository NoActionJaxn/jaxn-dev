import classNames from "classnames";
import { NAVIGATION } from "../constants/navigation";
import { NETWORKS } from "../constants/temp/networks";
import { Logo } from "./Logo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useKeyPress } from "../hooks/useKeyPress";
import { useCurrentPath } from "../hooks/useCurrentPath";

const HEADER_ITEM_HEIGHT = 'h-10';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const path = useCurrentPath();

  useKeyPress("Escape", () => setIsOpen(false));


  const handleClick = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <header className="sticky z-30 flex flex-row justify-between items-center bg-zinc-900 rounded-full p-2 drop-shadow-lg min-w-xs">
        <div className={classNames("flex items-center justify-center px-4", HEADER_ITEM_HEIGHT)}>
          <Logo />
        </div>

        <button
          type="button"
          className={classNames('bg-zinc-100 text-zinc-900 hover:bg-yellow-500 transition-colors aspect-square rounded-full cursor-pointer', HEADER_ITEM_HEIGHT)}
          onClick={handleClick}
        >
          {!isOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
          <span className="sr-only">Menu</span>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bg-black/50 backdrop-blur-sm z-20 inset-0 text-white min-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative top-30 space-y-12">
              <nav className="px-8">
                <ul className="space-y-5 text-3xl">
                  {Object.keys(NAVIGATION).map((key) => (
                    <li key={key}>
                      <a
                        href={NAVIGATION[key].url}
                        className={classNames("hover:text-yellow-500 transition", { "text-yellow-500": path === NAVIGATION[key].url })}
                        onClick={() => setIsOpen(false)}
                      >
                        {NAVIGATION[key].label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex items-center gap-3 pr-8">
                <div className="border-2 border-zinc-100 flex-grow" />
                <ul className="space-x-2">
                  {Object.keys(NETWORKS).map((key) => (
                    <li key={key} className="inline-block">
                      <a href={NETWORKS[key].url} title={NETWORKS[key].label} className="flex items-center justify-center size-10 bg-zinc-50 text-zinc-900 hover:bg-yellow-500 transition-colors text-xl rounded-full">
                        <i className={`fa-brands fa-${NETWORKS[key].icon}`}></i>
                        <span className="sr-only">{NETWORKS[key].label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="px-8">
                <h2 className="text-lg text-right underline hover:text-yellow-500 transition-colors">
                  <a href="mailto:jaxn.dev@gmail.com">jaxn.dev@gmail.com</a>
                </h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function DesktopHeader() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 0,
  });

  const path = useCurrentPath();

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
    const { offsetTop, offsetLeft, clientHeight, offsetWidth } = event.currentTarget;
    setHoveredIndex(index);
    setHoverPosition({ top: offsetTop, left: offsetLeft, width: offsetWidth });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <header className="flex flex-row justify-between items-center bg-zinc-900 rounded-full p-2 min-w-lg drop-shadow-lg z-30">
      <div className={classNames("flex items-center justify-center px-4", HEADER_ITEM_HEIGHT)}>
        <Logo />
      </div>

      <nav className={classNames("relative bg-zinc-800 rounded-full overflow-hidden", HEADER_ITEM_HEIGHT)}>
        <ul className="relative space-x-1" onMouseLeave={handleMouseLeave}>
          {hoveredIndex !== null && (
            <motion.div
              className={classNames("absolute bg-zinc-700 rounded-full z-40", HEADER_ITEM_HEIGHT)}
              layoutId="hoverBackground"
              initial={{
                top: 0,
                left: 0,
                width: 0,
                opacity: 0,
              }}
              animate={{
                top: hoverPosition.top,
                left: hoverPosition.left,
                width: hoverPosition.width,
                opacity: 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}

          {Object.keys(NAVIGATION).map((key, i) => (
            <li key={key} className="inline-block font-semibold uppercase">
              <a
                href={NAVIGATION[key].url}
                className={classNames("flex items-center justify-center text-sm px-5 relative z-50 hover:text-yellow-500 transition-colors", HEADER_ITEM_HEIGHT, {
                  "text-yellow-500": path === NAVIGATION[key].url
                })}
                onMouseEnter={(e) => handleMouseEnter(i, e)}
              >{NAVIGATION[key].label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <ul className="space-x-2">
          {Object.keys(NETWORKS).map((key) => (
            <li key={key} className="inline-block">
              <a href={NETWORKS[key].url} title={NETWORKS[key].label} className="flex items-center justify-center size-10 bg-zinc-50 text-zinc-900 hover:bg-yellow-500 transition-colors text-xl rounded-full">
                <i className={`fa-brands fa-${NETWORKS[key].icon}`}></i>
                <span className="sr-only">{NETWORKS[key].label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export function Header() {
  return (
    <div className="p-5">
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </div>
  )
};
