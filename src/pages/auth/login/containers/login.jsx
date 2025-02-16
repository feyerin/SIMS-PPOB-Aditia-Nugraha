import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../../../../assets/img/Illustrasi Login.png";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../../../store/actions/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const [visible, setVisible] = useState(false);
  const { message, status, error } = useSelector((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
  
		dispatch(authLogin(formData));
  };

  useEffect(() => {
    if (status === 0) {
      setVisible(false);
      navigate("/dashboard");
    } else if (status === 102 || status === 103) {
      setVisible(true);
      setAlert(message);
    }
  }, [error, status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex">
      {/* Left Side: Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h1 className="text-2xl font-bold text-gray-900">SIMS PPOB</h1>
        <p className="text-gray-600 text-lg mt-2">Masuk atau buat akun untuk memulai</p>
        <form onSubmit={handleLogin} className="mt-6">
          <input
            type="email"
            name="email"
            placeholder="Masukkan email anda"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Masukkan password anda"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-8 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="w-full bg-red-500 text-white p-3 rounded-md mt-12 hover:bg-red-600">
            Masuk
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Belum punya akun? <span className="cursor-pointer">Registrasi <a href="/register" className="text-red-500 font-semibold" >di sini</a></span>
          </p>
        </form>
        {visible && (
          <div className={`flex w-full mx-16 justify-between ${status === 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"} px-4 py-2 mt-6 rounded-md`}>
            <span>{alert}</span>
            <button onClick={() => setVisible(false)}>
              X
            </button>
          </div>
        )}
      </div>

      {/* Right Side: Illustration */}
      <div className="w-1/2 flex justify-center items-center bg-[#fff1f0]">
        <img
          src={illustration}
          alt="Illustration"
          className="w-3/4 h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
