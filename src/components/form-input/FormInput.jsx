import React from "react";
import "./FormInput.scss";
const FormInput = ({ handleChange, label, ...formInputsProps }) => {
  const fromLabel = (
    <label
      htmlFor={formInputsProps.name}
      className={`${
        formInputsProps.value.length ? "shrink" : ""
      }form-input-label`}
    >
      {label}
    </label>
  );
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        type="text"
        {...formInputsProps}
      />
      {label ? fromLabel : null}
    </div>
  );
};

export default FormInput;
