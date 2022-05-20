import React, { useContext } from "react";
import GlobalContext from "../../context/context";
import axios from "axios";

function DelAlert() {
  const { setAlert, setDeleteAlert, deleteProject, setAlertMsg, setStatus } =
    useContext(GlobalContext);

  const handleDeleteProject = async () => {
    try {
      await axios
        .delete(
          `${process.env.REACT_APP_BACKEND_URL}/api/projects/${deleteProject}`,
          {
            withCredentials: true,
          }
        )
        .then(() => {
          setDeleteAlert(false);
          setStatus("Projet supprimé");
        });
    } catch (err) {
      setAlertMsg("Erreur lors de la suppression");
      setAlert(true);
    }
  };

  return (
    <div className="alert">
      <section className="alert_box">
        <h6>Est-ce que tu es sûr de vouloir supprimer ce projet ?</h6>

        <button
          type="submit"
          className="button_alert"
          onClick={handleDeleteProject}
        >
          VALIDER
        </button>
        <button
          type="button"
          className="button_alert"
          onClick={() => {
            setDeleteAlert(false);
          }}
        >
          ANNULER
        </button>
      </section>
    </div>
  );
}

export default DelAlert;
