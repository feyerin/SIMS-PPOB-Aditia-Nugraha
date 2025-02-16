import React from "react";
import { Logo } from "../../../assets/index";

const ConfirmTopUpModal = ({ amount, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <img src={Logo} alt="" className="h-12" />
        </div>

        {/* Text */}
        <p className="mt-4 text-gray-700">Anda yakin untuk Top Up sebesar</p>
        <h2 className="text-2xl font-bold mt-1">Rp{amount.toLocaleString("id-ID")} ?</h2>

        {/* Buttons */}
        <button
          onClick={onConfirm}
          className="mt-4 text-red-500 font-semibold hover:underline"
        >
          Ya, lanjutkan Top Up
        </button>
        <button
          onClick={onCancel}
          className="block mt-2 text-gray-400 hover:text-gray-600 text-center mx-auto"
        >
          Batalkan
        </button>
      </div>
    </div>
  );
};

export default ConfirmTopUpModal;
