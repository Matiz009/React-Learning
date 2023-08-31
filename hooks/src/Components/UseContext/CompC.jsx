import React, { useContext } from "react";
import { BioData } from "../../index.js";

const CompC = () => {
  const context = useContext(BioData);
  return <div> Hello {context} </div>;
};

export default CompC;
