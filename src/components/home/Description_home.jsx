import React from "react";
import { motion } from "framer-motion";

function Description_home() {
  return (
    <>
      <motion.div
        animate={{ x: [-2000, 25, 0] }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 2,
          delay: 1.2,
        }}
      >
        <p className="description_home">
          Bienvenue sur mon Portfolio, je m'appelle Sidney Croset j'ai 24 ans.{" "}
          <br /> <br />
          Aprés quelques années d'expérience en cuisine ainsi que dans
          l'industrie, j'ai décidé de me lancer dans le monde du développement
          web. Vous pourrez prendre part ici de mon expérience, en découvrant
          tous les projets sur lesquels j'ai pu travailler. <br />
          <br /> Vous trouverez aussi juste ci-dessous mon CV en cliquant sur le
          bouton.
        </p>
      </motion.div>
    </>
  );
}

export default Description_home;
