import React from "react";

function FormInput({ name, label, type }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white md:text-black">
        {label}
      </legend>
      <input
        type={type}
        className="input w-full"
        name={name}
        placeholder="Type here"
      />
    </fieldset>
  );
}

export default FormInput;
