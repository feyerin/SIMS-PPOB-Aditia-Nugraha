import Profiles from "components/organs/profiles";
import React, { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import ConfirmTopUpModal from "../components/confirmTopUpModal";
import { useDispatch, useSelector } from "react-redux";
import { postTopup } from "store/actions/topup";
import Modal from "components/molecules/modal";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location.state?.service;

  console.log("state", state);

  const [amount, setAmount] = useState(0);
  const [topUpAmount, setTopupAmount] = useState(0);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { status } = useSelector((state) => state.topup);

  const handlePredefinedAmount = (value) => {
    setAmount(new Intl.NumberFormat("id-ID").format(value));
    setTopupAmount(value);
    setError(""); // Reset error saat pilih nominal cepat
  };

  const handleConfirm = ( ) => {
    dispatch(postTopup({top_up_amount: topUpAmount}));
    setShowModal(false);
    if (status === 0){
        setIsSuccess(true);
    } else {
        setIsSuccess(false);
    }

    setShowAlert(true);
  }

  const handleCancel = ( ) => {
    setShowModal(false);
  }

  const handleClose = ( ) => {
    setShowAlert(false);
  }

  return (
    <div className=" bg-white p-6">
        {/* Profile & Balance */}
        <Profiles />
    
        {/* top Up */}
        <div className="py-10 max-w-7xl mx-auto">
            <h2 className="text-xl font-bold">PemBayaran</h2>
            <div className="flex">
              <h2 className="text-xl font-bold">PemBayaran</h2>

            </div>

            <div className="relative flex items-center mt-4">
                <FaMoneyBillWave className="absolute left-3 text-gray-400" />
                <input
                type="text"
                value={amount}
                placeholder="Masukkan nominal"
                className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
            </div>
            <button
                onClick={() => setShowModal(true)}
                className="mt-4 w-full py-2 rounded-md font-semibold transition bg-red-500 text-white hover:bg-red-600"
            >
                Bayar
            </button>
        </div>
        
        {showModal && (<ConfirmTopUpModal onCancel={handleCancel} onConfirm={handleConfirm} amount={amount}/>) }
        {showAlert && (<Modal isSuccess={isSuccess} onClose={handleClose} amount={amount} type= {"Top Up"}/>) }
    </div>
  );
};

export default Payment;
