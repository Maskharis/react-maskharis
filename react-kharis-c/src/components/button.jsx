import React from "react";

function Button(props) {
  const { label, onClick, type } = props;

  return (
    <button
      className="p-3 bg-indigo-600 rounded-full px-4 text-white font-bold m-1 items-center"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

function ButtonLang(props) {
  const { label, onClick, type } = props;

  return (
    <button
      className="p-3 bg-indigo-600 rounded-lg text-white font-bold mx-auto my-3 text-center w-1/4"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

function ButtonDellete(props) {
  const { label, onClick, type } = props;

  return (
    <button
      className="p-3 bg-rose-700 rounded-lg text-white font-bold mx-auto my-3 text-center "
      onClick={onClick}
      type={type}
      label="delete"
    >
      delete
    </button>
  );
}

function ButtonEdit(props) {
  const { label, onClick, type } = props;

  return (
    <button
      className="p-3 bg-rose-700 rounded-lg text-white font-bold m-2 text-center "
      onClick={onClick}
      type={type}
      label="edit"
    >
      edit
    </button>
  );
}

export { Button, ButtonDellete, ButtonEdit, ButtonLang };
