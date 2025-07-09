import { motion } from "framer-motion";

const AnimatedBlob = ({
  size = "400px",
  color = "#8367c7", // purple-ish
  style = {},
  top = "10%",
  left = "10%",
}) => {
  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter blur-2xl"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        top,
        left,
        ...style,
      }}
      animate={{
        y: [0, 20, 0],
        x: [0, 20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export default AnimatedBlob;
