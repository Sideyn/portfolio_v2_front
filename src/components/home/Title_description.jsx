import React from "react";
import { motion } from "framer-motion";

function Title_description() {
  return (
    <>
      {" "}
      <motion.div
        animate={{ x: [1000, 0] }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 1.4,
          delay: 1,
        }}
      >
        <section className="elements_home_description">
          <h3>DESCRIPTION</h3>

          <div className="circle" id="circle_home"></div>
          <motion.div
            animate={{ x: [500, 0], rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: 1.5,
            }}
          >
            <hr className="line_home" />
          </motion.div>
        </section>{" "}
      </motion.div>
    </>
  );
}

export default Title_description;
