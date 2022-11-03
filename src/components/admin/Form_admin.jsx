import React, { useEffect, useContext } from "react";
import axios from "axios";
import GlobalContext from "../../context/context";
import Alert from "../../components/alert/Alert";
import Status from "../../components/status/Status";
import DelAlert from "../../components/alert/DelAlert";

function Form_admin() {
  const {
    setAdmin,
    alert,
    setAlert,
    status,
    setStatus,
    setAlertMsg,
    deleteAlert,
    setDeleteAlert,
    actionType,
    setActionType,
    projects,
    setProjects,
    assets,
    setAssets,
    project,
    setProject,
    submitType,
    setSubmitType,
    assetFile,
    setAssetFile,
    projectBox,
    updateId,
    setUpdateId,
    setDeleteProject,
  } = useContext(GlobalContext);

  // Avoir l'admin
  const getAdmin = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin`).then((resp) => {
      return setAdmin(resp.data);
    });
  };

  // Avoir tout les assets
  const getAllAssets = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/assets`)
      .then((resp) => {
        return setAssets(resp.data);
      });
  };

  // Avoir tout les projets
  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
      .then((resp) => {
        return setProjects(resp.data);
      });
  };

  useEffect(() => {
    getAdmin();
    getAllAssets();
    getAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Stock l'asset dans le state project
  const stockAssetProject = (id) => {
    if (projectBox === "projet") {
      setProject({ ...project, assets_id: id });
    } else {
      setAlertMsg("Erreur en enregistrant l'image");
      setAlert(true);
    }
  };

  // Récupère le nouvel asset
  const handleNewAsset = (e) => {
    const selectedAsset = e.target.files[0];
    const { type } = selectedAsset;
    if (type !== "image/png" && type !== "image/jpg" && type !== "image/jpeg") {
      setAssetFile();
      setAlertMsg("Séléctionne une image .png, .jpg ou .jpeg");
      setAlert(true);
    } else {
      setAssetFile(selectedAsset);
    }
  };

  // Envoie le nouvel asset au back
  const handleAssetSubmit = async () => {
    // FormData est un objet dispo ds le navigateur avec les données du formulaire
    const data = new FormData();
    // on y ajoute le nouveau fichier asset
    data.append("asset", assetFile);
    // on l'envoie au back avec axios
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/assets/upload`, data, {
          withCredentials: true,
        })
        .then(() => {
          getAllAssets();
          setStatus("Nouvelle image créée");
        });
    } catch (err) {
      setStatus(`Erreur : ${err.response.data}`);
    }
  };

  // Créer, modifier ou supprimer le projet
  const handleProjectSubmit = async () => {
    if (actionType === "ajouter") {
      if (!project.title || !project.link || !project.description) {
        setAlertMsg("Remplis tous les champs correctement");
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
          setStatus("Erreur lors de la création du projet");
        }
      }
    } else if (actionType === "modifier") {
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
        setStatus("Erreur lors de la modification du projet");
      }
    } else {
      setAlertMsg("Clique sur télécharger");
      setAlert(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitType === "form") {
      if (projectBox === "projet") {
        handleProjectSubmit();
      } else {
        setAlertMsg("Le projet à modifier n'est pas bien renseigné");
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
      {alert ? <Alert /> : null}
      {status ? <Status /> : null}
      {deleteAlert ? <DelAlert /> : null}

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

            {actionType === "modifier" ? (
              <label htmlFor="select_update">
                <select
                  name="update"
                  onChange={(e) => setUpdateId(e.target.value)}
                >
                  <option>Choisis un article à modifier</option>
                  {projects.map((projectUpd) => (
                    <option value={projectUpd.id} key={projectUpd.id}>
                      {projectUpd.title}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            {actionType === "supprimer" ? (
              <label htmlFor="select_delete">
                <select
                  name="delete"
                  onChange={(e) => setDeleteProject(e.target.value)}
                >
                  <option>Choisis un projet à supprimer</option>
                  {projects.map((projectDel) => (
                    <option value={projectDel.id} key={projectDel.id}>
                      {projectDel.title}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
          </section>

          {actionType === "ajouter" || actionType === "modifier" ? (
            <section className="form_proj">
              <div className="fields">
                <label htmlFor="title">
                  <input
                    type="text"
                    placeholder="Titre"
                    value={project.title}
                    onChange={(e) =>
                      setProject({ ...project, title: e.target.value })
                    }
                  />
                </label>

                <label htmlFor="link">
                  <input
                    type="text"
                    placeholder="Lien"
                    value={project.link}
                    onChange={(e) =>
                      setProject({ ...project, link: e.target.value })
                    }
                  />
                </label>

                <label htmlFor="description">
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={project.description}
                    onChange={(e) =>
                      setProject({ ...project, description: e.target.value })
                    }
                  ></textarea>
                </label>
              </div>
            </section>
          ) : null}

          {actionType === "modifier" || actionType === "ajouter" ? (
            <section className="add_assets">
              <label htmlFor="asset">
                <input
                  type="file"
                  name="assets_file"
                  onChange={handleNewAsset}
                />
              </label>

              <label htmlFor="stock_asset">
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
          ) : null}

          <section className="buttons">
            {actionType === "modifier" || actionType === "ajouter" ? (
              <button
                className="button_admin"
                type="submit"
                onClick={() => setSubmitType("asset")}
              >
                TÉLÉCHARGER
              </button>
            ) : null}

            {actionType === "modifier" || actionType === "ajouter" ? (
              <button
                type="submit"
                className="button_admin"
                onClick={() => {
                  setSubmitType("form");
                }}
              >
                VALIDER
              </button>
            ) : null}

            {actionType === "supprimer" ? (
              <button
                type="button"
                className="button_admin"
                onClick={() => {
                  setDeleteAlert(true);
                }}
              >
                VALIDER
              </button>
            ) : null}
          </section>
        </form>
      </section>
    </div>
  );
}

export default Form_admin;
