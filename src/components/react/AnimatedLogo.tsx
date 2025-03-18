import { useEffect, useState } from "react"
import useTypingSimulator from "./hooks/useTypingSimulator"
import useScrollPosition from "./hooks/useScrollPosition";
import classNames from "classnames";
import { ROUTES } from "../../lib/constants/routes";

const TYPE = 'jaxn.dev';
const CONDENSED_TYPE = 'j';

function AnimatedLogo() {
  const [logoType, setLogoType] = useState(TYPE);
  const { displayedText, showCursor } = useTypingSimulator(logoType);

  const { scrollY } = useScrollPosition({ debounce: 10 });

  useEffect(() => {
    setLogoType(scrollY > 0 ? CONDENSED_TYPE : TYPE);
  }, [scrollY]);

  return (
    <a className="w-min h-min text-4xl font-righteous select-none" href={ROUTES.home.url}>
      <span>{displayedText}</span>
      <span className={classNames({ 'opacity-0': !showCursor })}>&#9608;</span>
    </a>
  );
}

export default AnimatedLogo;