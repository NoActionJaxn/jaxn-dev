import { useState, type ReactNode } from "react";
import classNames from "classnames";
import { MenuButton } from "./MenuButton";
import { COLORS, SIZES } from "../../lib/constants/tailwind";

export interface MenuProps {
  children?: ReactNode | ReactNode[];
};

export function Menu({ children }: MenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <MenuButton className="relative z-50" isOpen={showMenu} onClick={toggleMenu} />
      {showMenu && (
        <div className={
          classNames(
            COLORS.MENU.BACKGROUND,
            SIZES.MENU.SPACING.Y_AXIS,
            SIZES.SPACING.X_AXIS,
            "z-40 absolute flex flex-col top-0 left-0 w-screen h-screen backdrop-blur-2xl"
          )}>
          {children}
        </div>
      )}
    </>
  );
};
