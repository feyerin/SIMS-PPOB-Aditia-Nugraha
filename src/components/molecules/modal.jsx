import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Modal = ({ amount, onClose, isSuccess, type }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        {/* Icon Check */}
        <div className="flex justify-center">
          <div className={`${isSuccess ? "bg-green-500" : "bg-red-500"} p-3 rounded-full`}>
            { isSuccess ? (<FaCheck className="text-white text-2xl" />) : (<FaTimes className="text-white text-2xl" />) }
          </div>
        </div>

        {/* Text */}
        <p className="mt-4 text-gray-700">
          {type} sebesar
        </p>
        <h2 className="text-2xl font-bold mt-1">Rp{amount.toLocaleString("id-ID")}</h2>
        <p className="text-gray-500">{ isSuccess ? "berhasil!" : "gagal" }</p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-4 text-red-500 font-semibold hover:underline"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default Modal;
