import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import axios from "axios";

function Caroussel_home() {
  const [assets, setAssets] = useState([]);

  const getAllAssets = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/assets`)
      .then((resp) => {
        // console.log(resp.data);
        return setAssets(resp.data);
      });
  };

  useEffect(() => {
    getAllAssets();
  }, []);

  return (
    <div className="slide-container_home">
      <Slide>
        {assets.map((asset) => (
          <NavLink exact="true" to="/project" key={asset.id}>
            <div className="each-slide">
              <div
                className="slide_container_home_img"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${asset.source})`,
                }}
              ></div>
            </div>
          </NavLink>
        ))}
      </Slide>
    </div>
  );
}

export default Caroussel_home;
