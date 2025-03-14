import { useState, type ReactNode } from "react";
import classNames from "classnames";
import { MenuButton } from "./MenuButton";
import { COLORS, SIZES } from "../../lib/constants/tailwind";
import { ROUTES } from "../../lib/constants/routes";
import { SocialNetworks } from "./SocialNetworks";
import type { SocialNetworkNode } from "../../types/graphql";
import { motion } from "framer-motion";

interface MenuProps {
  networks: {
    node: SocialNetworkNode;
  }[]
}

export function Menu({ networks }: MenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <MenuButton className="relative z-50" isOpen={showMenu} onClick={toggleMenu} />
      {showMenu && (
        <div className={
          classNames(
            {
              'opacity-100': showMenu,
              'opacity-0': !showMenu,
            },
            COLORS.MENU.BACKGROUND,
            SIZES.MENU.SPACING.Y_AXIS,
            SIZES.SPACING.X_AXIS,
            "z-40 absolute flex flex-col top-0 left-0 w-screen h-screen backdrop-blur-2xl overflow-hidden",
            "transition-opacity duration-500 ease-in-out"
          )}>
          <nav className="flex-1 flex flex-col justify-center items-end">
            <ul className="flex flex-col gap-8">
              {ROUTES.map((route, i) => (
                <motion.li
                  key={route.url}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.2 }}
                  className="block text-right"
                >
                  <motion.a
                    whileHover={{ zoom: 1.2 }}
                    transition={{ duration: 0.1 }}
                    className={classNames(
                      COLORS.MENU.LINK.BACKGROUND,
                      COLORS.MENU.LINK.TEXT,
                      SIZES.MENU.LINK.Y_AXIS,
                      SIZES.MENU.LINK.X_AXIS,
                      "uppercase text-black text-2xl font-unica-one-regular"
                    )}
                    href={route.url}
                  >
                    {route.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <SocialNetworks networks={networks.map((edge) => edge.node)} />
          </motion.div>
        </div>
      )}
    </>
  );
};
