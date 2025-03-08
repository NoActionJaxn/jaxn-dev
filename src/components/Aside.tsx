import { useState } from "react";
import { motion, type Transition } from 'framer-motion';
import { ROUTES, NETWORKS } from "../lib/constants";

const COLLAPSED_WIDTH = 144;

const TRANSITION_DELAY = 0.15;
const TRANSITION_DURATION = 0.2;
const TRANSITION_TYPE: Transition = { type: 'spring', stiffness: 300 };

export function Aside() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const footerDelay = () => Object.keys(ROUTES).length * TRANSITION_DELAY;

  return (
    <motion.aside
      className="flex flex-col gap-4 p-6 transition-all w-min"
      initial={{ width: isOpen ? '33%' : COLLAPSED_WIDTH }}
      animate={{ width: isOpen ? '33%' : COLLAPSED_WIDTH }}
      transition={TRANSITION_TYPE}>
      <div className="flex justify-end pb-12">
        <motion.button
          className="border-3 rounded-full size-24 text-2xl cursor-pointer"
          type="button"
          onClick={handleClick}
          initial={{ rotate: isOpen ? 45 : 0, opacity: 0 }}
          animate={{ rotate: isOpen ? 45 : 0, opacity: 1 }}
          transition={TRANSITION_TYPE}>
          <i className="fa-solid fa-plus"></i>
          <span className="sr-only">Menu</span>
        </motion.button>
      </div>
      {isOpen && (
        <>
          <nav>
            <ul className="space-y-4">
              {
                Object.keys(ROUTES).map((key, index) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * TRANSITION_DELAY,
                      duration: TRANSITION_DURATION,
                    }}>
                    <a className="text-2xl font-semibold" href={ROUTES[key].href}>{ROUTES[key].label}</a>
                  </motion.li>
                ))
              }
            </ul>
          </nav>
          <motion.nav
            className="flex flex-1 items-end justify-end"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: footerDelay(),
              duration: 0.1,
            }}>
            <ul className="flex justify-center gap-2 h-32">
              {
                Object.keys(NETWORKS).map((key, index) => (
                  <li key={key}>
                    <a className="flex items-center justify-center border-3 rounded-full text-3xl size-20" href={NETWORKS[key].href}>
                      <i className={`fa-brands ${NETWORKS[key].icon}`} />
                      <span className="sr-only">{NETWORKS[key].label}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </motion.nav>
          <motion.footer
            className="text-xs text-right"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: footerDelay() + TRANSITION_DELAY,
              duration: TRANSITION_DURATION,
            }}>
            <h6>Jackson Hermitt</h6>
            <h6>Fullstack Dev Portfolio</h6>
            <br />
            <h6 className="text-zinc-400">jaxn.dev</h6>
          </motion.footer>
        </>
      )}
    </motion.aside>
  )
}