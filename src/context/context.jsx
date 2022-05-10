import React, { createContext, useState } from "react";

// Je déclare la création du context
const GlobalContext = createContext();

// Je l'applique à tout les enfants
export const GlobalContextProvider = ({ children }) => {
  //je déclare tous les states partagés
  // je crée le state qui recupère l'admin ID si elle existe et on le passe a tous les composants qui ont un accès admin
  const [adminId, setAdminId] = useState();

  //   Le state pour l'ouverture des alertes et le message
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(
    "Un message d'alerte doit s'afficher"
  );

  // Message de confirmation pour ajout ou suppression
  const [status, setStatus] = useState("");

  //   La popup d'alerte pour suppression
  const [deleteAlert, setDeleteAlert] = useState(false);

  //   Le type d&#39;action ajouter modifier ou supprimer
  const [actionType, setActionType] = useState("ajouter");

  //   Le state formulaire de projet
  const [project, setProject] = useState({
    title: "",
    link: "",
    description: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        adminId,
        setAdminId,
        alert,
        setAlert,
        status,
        setStatus,
        alertMsg,
        setAlertMsg,
        deleteAlert,
        setDeleteAlert,
        actionType,
        setActionType,
        project,
        setProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
