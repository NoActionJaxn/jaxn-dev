import { motion } from "framer-motion";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { TypingSimulator } from "./TypingSimulator";

const OPAQUE_POSITION = 10;

export function AnimatedLogo() {
  const { scrollY } = useScrollPosition(5);

  const opacity = scrollY > OPAQUE_POSITION ? Math.max(1 - (scrollY - OPAQUE_POSITION) / 200, 0) : 1;

  return (
    <motion.div
      style={{ opacity }}
      transition={{ duration: 0.3 }} // Smooth transition
    >
      <div className="w-min h-min p-4 text-xl pointer-events-none">
        <TypingSimulator className="text-nowrap" text="jaxn.dev" />
      </div>
    </motion.div>
  );
}