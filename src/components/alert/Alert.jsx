import React, { useContext } from "react";
import GlobalContext from "../../context/context";

function Alert() {
  const { alertMsg, setAlert } = useContext(GlobalContext);

  const handleAlert = () => {
    setAlert(false);
  };

  return (
    <div className="alert">
      <section className="alert_box">
        <h6>{alertMsg}</h6>

        <button type="button" className="button_alert" onClick={handleAlert}>
          RETOUR
        </button>
      </section>
    </div>
  );
}

export default Alert;
