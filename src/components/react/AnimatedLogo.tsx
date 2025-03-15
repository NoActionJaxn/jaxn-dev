import { useEffect, useState } from "react"
import useTypingSimulator from "../../hooks/useTypingSimulator"
import useScrollPosition from "../../hooks/useScrollPosition";
import classNames from "classnames";

const TYPE = 'JAXN.DEV ';
const CONDENSED_TYPE = 'J.D ';

function AnimatedLogo() {
  const [logoType, setLogoType] = useState(TYPE);
  const { displayedText, showCursor } = useTypingSimulator(logoType);

  const { scrollY } = useScrollPosition({ debounce: 10 });

  useEffect(() => {
    setLogoType(scrollY > 0 ? CONDENSED_TYPE : TYPE);
  }, [scrollY]);

  return (
    <span className="flex gap-2 w-min h-min p-2">
      <span>{displayedText}</span>
      <span className={classNames({ hidden: showCursor })}>&#9608;</span>
    </span>
  );
}

export default AnimatedLogo;