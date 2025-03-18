import type { HTMLAttributes } from "react";
import { ROUTES } from "../../lib/constants/routes";

interface LogoProps extends HTMLAttributes<HTMLSpanElement> {}

function Logo({className, ...rest}: LogoProps) {
  return (
    <a className="font-righteous" href={ROUTES.home.url}>
      <span>jaxn.dev</span>
      <span>&#9608;</span>
    </a>
  )
}

export default Logo;
