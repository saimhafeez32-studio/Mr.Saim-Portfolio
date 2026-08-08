import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Intro.css";

const Intro = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
        >
          <motion.h1
            className="intro__title"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1.18,
              y: 0,
            }}
            transition={{
              duration: 2.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Mr.Saim
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;