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
  const [submit, setSubmitType] = useState("");

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

  // Avoir l'admin
  // const getAdmin = () => {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin`).then((resp) => {
  //     console.log("admin", resp.data);
  //     return setAdmin(resp.data);
  //   });
  // };

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
    // getAdmin();
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

  const handleNewAsset = (e) => {
    console.log(e.target.files[0]);
    const selectedAsset = e.target.files[0];
    const { type } = selectedAsset;
    if (type !== "image/png" && type !== "image/jpg" && type !== "image/jpeg") {
      setAssetFile();
      setAlertMsg(
        "Veuillez selectionner une image .png ou .jpeg ou une video .mp4"
      );
      setAlert(true);
    } else {
      setAssetFile(e.target.files[0]);
      console.log(assetFile);
    }
  };

  const handleProjectSubmit = async () => {
    console.log("project", project);

    if (actionType === "ajouter") {
      if (!project.title) {
        setAlertMsg("Veuillez fournir un titre de projet");
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
    } else {
      setAlertMsg("Clique sur ajouter");
      setAlert(true);
    }
  };
  return (
    <div className="form_adm">
      <section className="admin_container">
        <h2>ADMINISTRATEUR</h2>

        <form className="form_admin" onSubmit="">
          <section className="selectors">
            <label htmlFor="select_action">
              <select name="action">
                <option value="" onClick="">
                  Ajouter
                </option>

                <option value="" onClick="">
                  Modifier
                </option>

                <option value="" onClick="">
                  Supprimer
                </option>
              </select>
            </label>

            <label htmlFor="select_update">
              <select name="update">
                <option>--Projets--</option>

                <option value="" onClick=""></option>
              </select>
            </label>
          </section>

          <FormProject />

          <section className="add_assets">
            <label htmlFor="asset">
              <input type="file" name="assets_file" onChange="" />
            </label>

            <label htmlFor="select_asset">
              <select name="asset">
                <option>Choisir une image</option>
                <option value="" onClick=""></option>
              </select>
            </label>
          </section>

          <section className="buttons">
            <button className="button_admin" type="button" onClick="">
              TÉLÉCHARGER
            </button>

            <button type="submit" className="button_admin" onClick="">
              VALIDER
            </button>
          </section>
        </form>
      </section>
    </div>
  );
}

export default Form_admin;
