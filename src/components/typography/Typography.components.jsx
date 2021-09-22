import React from "react";
import "./typography.styles.scss";

const Typography = ({ title, subText, ...otherProps }) => {
  return (
    <div className="typography-container" {...otherProps}>
      <h1 className="text-style-title">{title}</h1>
      <span className="text-style-subTitle">{subText}</span>
    </div>
  );
};

export default Typography;
