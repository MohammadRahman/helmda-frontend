import React from "react";
import "./inputHandler.styles.scss";
import classnames from "classnames";

const InputHandler = ({ name, onChange, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={classnames("form-control", { "is-invalid": error })}
        onChange={onChange}
        name={name}
        label={label}
      />
      {error && <div className="invalid-feedback">{error} </div>}
    </div>
  );
};

export default InputHandler;
