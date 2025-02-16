import React, { useState, useEffect } from "react";
import Profiles from "../../../components/organs/profiles";
import { getTransaction } from "../../../store/actions/transaction";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, formatTime } from "../../../utils/dateFormater";

const Transaction = () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);
    const [transaction, setTransaction] = useState([])
    const { data, loading } = useSelector((state) => state.transaction);

    useEffect(() => {
        setTransaction(data.records)
    }, [data]);

    useEffect(() => {
        dispatch(getTransaction(offset, limit));
    }, [limit]);
    
  return (
    <div className="max-w-7xl mx-auto p-4">
        <Profiles/>
        <h2 className="text-xl font-semibold mb-4">Semua Transaksi</h2>
        <div className="space-y-4">
            {loading === false &&
                transaction.length !== 0 ? 
                transaction.map((transaction) => (
                <div
                    key={transaction.id}
                    className="flex justify-between items-center p-4 rounded-lg shadow-sm"
                >
                    <div>
                    <p
                        className={
                        transaction.transaction_type === "TOPUP"
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                    >
                        {transaction.type === "credit" ? "+" : "-"} Rp.{transaction.total_amount.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {formatDate(transaction.created_on)} {formatTime(transaction.created_on)} WIB
                    </p>
                    </div>
                    <p className="text-gray-700 text-sm">{transaction.description}</p>
                </div>
                )) :  <div className="flex justify-center items-center h-20">
                        <p className="text-gray-400 text-lg">Maaf tidak ada histori transaksi saat ini</p>
                    </div>
            }
        </div>
        { 
            transaction.length !== 0 && (
                <button 
                type="button" 
                onClick={() => setLimit(limit + 5)} 
                className="mt-4 text-red-500 text-sm font-semibold w-full text-center">
                Show more
            </button>)
        }
        
    </div>
  );
};

export default Transaction;
