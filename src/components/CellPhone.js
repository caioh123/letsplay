import React from "react";
import { Image } from "react-bootstrap";
import cellPhone from "../images/cellphone.svg";

const CellPhone = () => {
  return (
    <div>
      <Image className="img-fluid" src={cellPhone} style={{ width: "300px" }} />
    </div>
  );
};

export default CellPhone;
