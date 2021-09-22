import classNames from "classnames";
import React from "react";

const TextArea = ({ name, type, value, label, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>
      <textarea
        className={classNames("form-control", { "is-invalid": error })}
        id="text-area"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error} </div>}
    </div>
  );
};

export default TextArea;
