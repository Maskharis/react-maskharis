import React from "react";

function Input(props) {
  const { label, onChange, type, placeholder, value, defaultValue } = props;

  return (
    <div className="flex flex-col items-center text-center">
      <label>{label}</label>
      <input
        className="border-2 rounded-md m-2 w-1/2"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

function Select(props) {
  const { label, placeholder, value, onChange, options = [] } = props;

  return (
    <div className="flex flex-col items-center text-center">
      <label>{label}</label>
      <select className="border-2 rounded-md m-2 w-1/2" onChange={onChange} value={value}>
        <option disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function TextArea(props) {
  const { label, onChange, type, placeholder, value, defaultValue } = props;

  return (
    <div className="flex flex-col items-center text-center">
      <label>{label}</label>
      <textarea
        className="border-2 rounded-md m-2 w-1/2"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export { Input, Select, TextArea }; // named export
// export default Input // export default
