import { createContext, useState, useContext, type ReactNode } from "react";

type MenuContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

type MenuProviderProps = {
  children: ReactNode;
};

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => useContext(MenuContext);

export default useMenu;
