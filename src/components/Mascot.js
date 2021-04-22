import React from "react";
import psy from "../images/psyduck.svg";
import { Image } from "react-bootstrap";

const Mascot = () => {
  return (
    <div>
      <Image className="img-fluid mt-4 ml-4 mascot" src={psy} />
    </div>
  );
};

export default Mascot;
