import Profiles from "components/organs/profiles";
import React, { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import ConfirmTopUpModal from "../components/confirmTopUpModal";
import { useDispatch, useSelector } from "react-redux";
import { postTopup } from "store/actions/topup";
import Modal from "components/molecules/modal";

const predefinedAmounts = [10000, 20000, 50000, 100000, 250000, 500000];

const Topup = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const [topUpAmount, setTopupAmount] = useState(0);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { status } = useSelector((state) => state.topup);

  const handleAmountChange = (e) => {
    let rawValue = e.target.value.replace(/\D/g, ""); // Hanya angka
    let numericValue = Number(rawValue);
    setTopupAmount(numericValue);

    if (numericValue <= 0) {
      setError("Minimal top up Rp10.000");
    } else if (numericValue > 1000000) {
      setError("Maksimal top up Rp1.000.000");
    } else {
      setError(""); // Hilangkan error jika valid
    }
    
    let formattedValue = new Intl.NumberFormat("id-ID").format(rawValue);
    setAmount(formattedValue);
  };

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
          <h2 className="text-xl font-bold">Nominal Top Up</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <div className="relative flex items-center mt-4">
                    <FaMoneyBillWave className="absolute left-3 text-gray-400" />
                    <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Masukkan nominal"
                    className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    disabled={error || amount === 0 ? true : false}
                    className={`mt-4 w-full py-2 rounded-md font-semibold transition ${
                    error || amount === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                >
                    Top Up
                </button>
            </div>

            {/* Predefined Amount Buttons */}
            <div className="grid grid-cols-3 gap-3 mt-4">
                {predefinedAmounts.map((value) => (
                <button
                    key={value}
                    onClick={() => handlePredefinedAmount(value)}
                    className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
                >
                    Rp{new Intl.NumberFormat("id-ID").format(value)}
                </button>
                ))}
            </div>

          </div>
        </div>
        
        {showModal && (<ConfirmTopUpModal onCancel={handleCancel} onConfirm={handleConfirm} amount={amount}/>) }
        {showAlert && (<Modal isSuccess={isSuccess} onClose={handleClose} amount={amount} type= {"Top Up"}/>) }
    </div>
  );
};

export default Topup;
