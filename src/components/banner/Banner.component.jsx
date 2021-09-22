import React from "react";
import "./banner.styles.scss";

const Banner = ({ hero, children }) => {
  return <div className={hero}>{children}</div>;
};

export default Banner;
