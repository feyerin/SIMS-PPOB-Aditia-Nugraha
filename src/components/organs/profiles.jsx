import { Background } from "../../assets/banner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getProfile } from "../../store/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Logo } from "../../assets/index";
import { getBalance } from "store/actions/balance";

const Profiles = () => {
    const dispatch = useDispatch();

    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        profile_logo: Logo
    })
    const [amount, setAmount] = useState(100000);
    const [showBalance, setShowBalance] = useState(false);
    const [maskedBalance , setMaskedBalance ] = useState("••••••");

    const user = useSelector((state) => state.profile);
    const balance = useSelector((state) => state.balance);

    useEffect(() => {
        dispatch(getProfile());
        dispatch(getBalance());
    }, []);

    useEffect(() => {
        setProfile(user.data);
        setAmount(balance.data.balance);
    }, [user, balance]);

    return (
        <div className="flex justify-between items-center mt-6 max-w-7xl mx-auto">
            {/* profil  */}
            <div className="flex items-center space-x-4">
                <img src={profile.profile_image} alt={Logo} className="w-12 h-12 bg-gray-300 rounded-full"/>
                <div>
                <p className="text-gray-500">Selamat datang,</p>
                <h2 className="text-xl font-bold">{ profile.first_name } {profile.last_name}</h2>
                </div>
            </div>

            {/* balance */}
            <div className={`text-white p-6 rounded-xl w-[50%] h-full relative bg-cover`} style={{backgroundImage: `url(${Background})`}}>
                <p className="text-sm">Saldo anda</p>
                <h2 className="text-2xl font-semibold mt-2">
                    Rp {showBalance ? amount.toLocaleString("id-ID") : maskedBalance}
                </h2>
                <button 
                    onClick={() => setShowBalance(!showBalance)}
                    className="flex items-center text-sm mt-2 text-white/80"
                >
                {showBalance ? "Tutup Saldo" : "Lihat Saldo"}{" "}
                {showBalance ? <FaEyeSlash className="ml-1" /> : <FaEye className="ml-1" />}
                </button>
            </div>
        </div>
    )
};

export default Profiles;