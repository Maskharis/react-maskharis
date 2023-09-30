import React from "react";
import { ButtonDellete, ButtonEdit } from "./button";

export default function Table(props) {
  const { headers = [], datas = [] } = props;

  const handleDeleteClick = (index) => {
    props.onDeleteClick(index);
  };

  return (
    <table className="border-2">
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
      {datas.map((data, index) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.productName}</td>
          <td>{data.productCategory}</td>
          <td>{data.productPrice}</td>
          <td>{data.productDesc}</td>
          <td>
            <img src={data.productImg} alt={data.productName} />
          </td>
          <td>
            <ButtonDellete onClick={() => handleDeleteClick(index)} />
            <ButtonEdit />
          </td>
        </tr>
      ))}
      {props.showDeleteConfirmation && (
        <tr>
          <td colSpan={headers.length} className=" p-2 text-center">
            <p>Apakah Anda ingin menghapus data ini?</p>
            <button
              onClick={() => props.onConfirmDelete()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Hapus
            </button>
            <button
              onClick={() => props.onCancelDelete()}
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Batal
            </button>
          </td>
        </tr>
      )}
    </table>
  );
}
