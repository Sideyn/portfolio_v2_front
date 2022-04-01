import React from "react";
import me from "../../assets/me.png";

function Me() {
  return (
    <div className="picture_me">
      <div className="img_me">
        <img src={me} alt="moi" className="me" />
      </div>

      <hr className="hr_me" />
    </div>
  );
}

export default Me;
