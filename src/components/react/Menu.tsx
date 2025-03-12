import { useRef, useState, type ReactNode } from "react";
import { useElementPosition } from "../../hooks/useElementPosition";
import { MenuButton } from "./MenuButton";
import classNames from "classnames";

interface MenuProps {
  children?: ReactNode | ReactNode[];
};

export function Menu({ children }: MenuProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { x, y, width, height } = useElementPosition(buttonRef as React.RefObject<HTMLElement>);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <MenuButton ref={buttonRef} onClick={toggleMenu} />
      <div className={classNames({ absolute: isVisible, hidden: !isVisible })}>
        {children}
      </div>
    </div>
  )
};
