import React, { useContext } from "react";
import GlobalContext from "../../context/context";

function Status() {
  const { status, setStatus } = useContext(GlobalContext);
  const handleAlert = () => {
    setStatus(false);
  };
  return (
    <div className="alert">
      <section className="alert_box">
        <h6>{status}</h6>

        <button type="button" className="cancel_button" onClick={handleAlert}>
          ANNULER
        </button>
      </section>
    </div>
  );
}

export default Status;
