import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { MenuProvider } from "./hooks/useMenu";

const MenuWrapper = () => {
  return (
    <MenuProvider>
      <div className="relative">
        <MenuButton />
        <Menu />
      </div>
    </MenuProvider>
  );
};

export default MenuWrapper;
