
import classNames from "classnames";
import useMenu from "./hooks/useMenu";

function Menu() {
  const { isMenuOpen } = useMenu();

  return (
    <div className={classNames("absolute top-0 left-0 w-screen h-screen z-30", { 'hidden': isMenuOpen })}>
      <nav>

      </nav>
    </div>
  );
}

export default Menu;
