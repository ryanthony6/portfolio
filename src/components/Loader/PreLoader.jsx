import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1.5 } },
    exit: { opacity: 0, transition: { ease: "easeInOut" } },
  };

  const spanVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.section
      className="bg-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="flex items-center justify-center h-screen text-white">
        <motion.span variants={spanVariants}>A</motion.span>
        <motion.span variants={spanVariants}>B</motion.span>
        <motion.span variants={spanVariants}>C</motion.span>
      </motion.div>
    </motion.section>
  );
};

export default PreLoader;
