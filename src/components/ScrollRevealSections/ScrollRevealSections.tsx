import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeSectionProps {
  children: React.ReactNode;
  background: string;
}

export default function FadeSection({
  children,
  background,
}: FadeSectionProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 100,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.92,
        y: isInView ? 0 : 100,
        filter: isInView ? "blur(0px)" : "blur(10px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        padding: "20px 200px 40px 200px",
        boxSizing: "border-box",
        minHeight: "auto",
        background,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
      }}
    >
      {children}
    </motion.section>
  );
}