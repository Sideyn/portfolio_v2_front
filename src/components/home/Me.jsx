import React from "react";
import me from "../../assets/me.png";
import { motion } from "framer-motion";

function Me() {
  return (
    <div className="picture_me">
      <motion.div
        animate={{ x: 0, scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="img_me">
          <img src={me} alt="moi" className="me" />
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [2000, 0] }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 1,
          delay: 1.5,
        }}
      >
        <hr className="hr_me" />
      </motion.div>
    </div>
  );
}

export default Me;
