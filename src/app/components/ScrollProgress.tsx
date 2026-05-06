import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 origin-left z-50"
      style={{ scaleX }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 blur-sm opacity-70" />
    </motion.div>
  );
}
