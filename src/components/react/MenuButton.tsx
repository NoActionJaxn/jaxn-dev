import { forwardRef, type ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const MenuButton = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  type = "button",
  ...rest
}, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(className, "hover:bg-zinc-300 hover:text-zinc-800 border-zinc-300 bg-zin border-2 rounded-full text-xs size-12 md:size-14 cursor-pointer")}
      type={type}
      {...rest}>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
});
