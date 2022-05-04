import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GlobalContext from "../../context/context";
import FormProject from "./Form_project";

function Form_admin() {
  const {
    adminId,
    setAdminId,
    alert,
    setAlert,
    alertMsg,
    setAlertMsg,
    deleteAlert,
    setDeleteAlert,
    actionType,
    setActionType,
    project,
    setProject,
  } = useContext(GlobalContext);

  // State project
  const [projectBox, setProjectBox] = useState("projet");

  // Gére le submit d'ajout d'une image
  const [submitType, setSubmitType] = useState("");

  // Avoir tout les admins
  const [admin, setAdmin] = useState([]);

  // Avoir tout les assets
  const [assets, setAssets] = useState([]);

  // Avoir tout les projets
  const [projects, setProjects] = useState([]);

  // Id du projet à modifier
  const [updateId, setUpdateId] = useState([]);

  // State upload image
  const [assetFile, setAssetFile] = useState();

  // Message de confirmation pour ajout ou suppression
  const [status, setStatus] = useState("");

  const [deleteProject, setDeleteProject] = useState();

  // Avoir l'admin
  const getAdmin = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin`).then((resp) => {
      console.log("admin", resp.data);
      return setAdmin(resp.data);
    });
  };

  // Avoir tout les assets
  const getAllAssets = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/assets`)
      .then((resp) => {
        console.log("assets", resp.data);
        return setAssets(resp.data);
      });
  };

  // Avoir tout les projets
  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
      .then((resp) => {
        console.log("projects", resp.data);
        return setProjects(resp.data);
      });
  };

  useEffect(() => {
    getAdmin();
    getAllAssets();
    getAllProjects();
  }, []);

  // Stock l'asset dans le state project
  const stockAssetProject = (id) => {
    if (projectBox === "projet") {
      setProjectBox({ ...projects, assets_id: id });
    } else {
      setAlertMsg("Erreur en enregistrant l'image");
      setAlert(true);
    }
  };

  // Récupére le nouvel asset
  const handleNewAsset = (e) => {
    // console.log(e.target.files[0]);
    const selectedAsset = e.target.files[0];
    const { type } = selectedAsset;
    if (type !== "image/png" && type !== "image/jpg" && type !== "image/jpeg") {
      setAssetFile();
      setAlertMsg("Veuillez selectionner une image");
      setAlert(true);
    } else {
      setAssetFile(e.target.files[0]);
      // console.log(assetFile);
    }
  };

  // Envoie le nouvel asset au back
  const handleAssetSubmit = async () => {
    // FormData est un objet dispo ds le navigateur avec les données du formulaire
    const data = new FormData();

    // J'ajoute le nouveau fichier asset
    data.append("asset", assetFile);

    // Je l'envoie au back avec axios
    const type = assetFile.type === "image/png" ? "image/jpg" : "image/jpeg";
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/assets${type}`, data, {
          withCredentials: true,
        })
        .then(() => {
          // console.log(resp);
          // j'actualise la liste d'admin avec le nouveau
          getAllAssets();
          setStatus("Nouvel Asset créé");
        });
    } catch (err) {
      setStatus(`erreur : ${err.res.data}`);
    }
  };

  // Créer le projet
  const handleProjectSubmit = async () => {
    // console.log("project", project);
    // Si l'action ajouter est sélectionné on fait un post
    if (actionType === "ajouter") {
      // Je vérifie que mes champs obligatoirse sont bien remplis
      if (!project.title || !project.link || !project.description) {
        setAlertMsg("Veuillez remplir les champs correctement");
        setAlert(true);
      } else {
        try {
          await axios
            .post(
              `${process.env.REACT_APP_BACKEND_URL}/api/projects`,
              project,
              {
                withCredentials: true,
              }
            )
            .then((resp) => {
              console.log("project", resp);
              getAllProjects();
              setStatus("Projet créé");
            });
        } catch (err) {
          console.log(err.response.data);
          setStatus("Erreur lors de la création de l'évènement");
        }
      }
      // Si l'action sélctionné est modifier on fait un put
    } else if (actionType === "modifier") {
      setProject({ ...project, assets_id: "" });
      try {
        await axios
          .put(
            `${process.env.REACT_APP_BACKEND_URL}/api/projects/${updateId}`,
            project,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            setStatus("Projet modifié");
          });
      } catch (err) {
        setStatus("Erreur lors de la modification du  projet");
      }
      // Si l'action sélectionné est supprimer on fait un delete
    } else if (actionType === "supprimer") {
      setProject({ ...project, assets_id: "" });
      try {
        await axios
          .delete(
            `${process.env.REACT_APP_BACKEND_URL}/api/projects/${deleteProject}`,
            project,
            {
              withCredentials: true,
            }
          )
          .then(() => {
            setStatus("Projet supprimé");
          });
      } catch (err) {
        setStatus("Erreur lors de la suppression du  projet");
      }
    } else {
      setAlertMsg("Clique sur ajouter");
      setAlert(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitType === "form") {
      if (projectBox === "projets") {
        handleProjectSubmit();
      } else {
        setAlertMsg("L'élément à modifier n'est pas bien renseigné");
        setAlert(true);
      }
    } else if (submitType === "asset") {
      handleAssetSubmit();
    } else {
      setAlertMsg("Erreur lors de l'envoi du formulaire");
      setAlert(true);
    }
  };

  return (
    <div className="form_adm">
      <section className="admin_container">
        <h2>ADMINISTRATEUR</h2>

        <form className="form_admin" onSubmit={handleSubmit}>
          <section className="selectors">
            <label htmlFor="select_action">
              <select
                name="action"
                onChange={(e) => {
                  setActionType(e.target.value);
                }}
              >
                <option value="ajouter">Ajouter</option>

                <option value="modifier">Modifier</option>

                <option value="supprimer">Supprimer</option>
              </select>
            </label>

            {actionType === "modifier" || actionType === "supprimer" ? (
              <label htmlFor="select_update">
                <select
                  name="projets"
                  onChange={(e) => setUpdateId(e.target.value)}
                >
                  <option>Choisis un article à modifier</option>
                  {projects.map((projectUpd) => (
                    <option value={projectUpd.id} key={project.id}>
                      {projectUpd.title}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
          </section>

          <FormProject />

          {actionType === "modifier" && projectBox === "projets" ? null : (
            <section className="add_assets">
              <label htmlFor="asset">
                <input
                  type="file"
                  name="assets_file"
                  onChange={handleNewAsset}
                />
              </label>

              <label htmlFor="select_asset">
                <select
                  name="asset"
                  onChange={(e) => stockAssetProject(e.target.value)}
                >
                  <option>Choisir une image</option>
                  {assets.map((asset) => (
                    <option value={asset.id} key={asset.id}>
                      {asset.asset_name}
                    </option>
                  ))}
                </select>
              </label>
            </section>
          )}

          <div className="buttons">
            <button
              className="button_admin"
              type="submit"
              onClick={() => setSubmitType("asset")}
            >
              TÉLÉCHARGER
            </button>

            <button
              type="submit"
              className="button_admin"
              onClick={() => setSubmitType("form")}
            >
              VALIDER
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form_admin;
