import React from "react";
import { motion } from "framer-motion";

function Description_project() {
  return (
    <>
      <motion.div
        animate={{ x: [1000, -20, 0] }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 2,
        }}
      >
        <p className="description_home_project">
          Voici un aperçu des projets sur lesquels j'ai pu avoir la chance de
          travailler. <br /> <br /> En cliquant sur le carousel, vous aurez
          accés à la page réunissant tous mes projets où se trouvera le lien
          vers chacun des projets, ainsi que tout le descriptif nécessaire pour
          savoir sur quelle partie j'ai travaillé, avec quels outils, quand ?
          Avec qui ? Dans quelle circonstance ? <br /> <br /> Juste en dessous
          le carousel vous pourrez découvrir les outils de développement avec
          lesquels j'ai travailler.
        </p>
      </motion.div>
    </>
  );
}

export default Description_project;
