import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import illustration from "../../../../assets/img/Illustrasi Login.png";
import { registerUser } from "../../../../store/actions/register";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const [visible, setVisible] = useState(false);

  const { message, status } = useSelector((state) => state.register);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "password tidak sama";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (validateForm()) {
      dispatch(registerUser(formData));
      setVisible(true);
    } 
  };

  useEffect(() => {
      setAlert(message);
  }, [message, status])
  
  
  return (
    <div className="flex h-screen">
      {/* Left Side: Register Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h1 className="text-2xl font-bold text-gray-900">SIMS PPOB</h1>
        <p className="text-gray-600 text-lg mt-2">Lengkapi data untuk membuat akun</p>
        <form onSubmit={handleRegister} className="mt-6 mx-16">
          <input
            type="email"
            placeholder="masukkan email anda"
            name="email"
            className="w-full p-3 my-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="nama depan"
            name="first_name"
            className="w-full p-3 my-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="nama belakang"
            name="last_name"
            className="w-full p-3 my-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="buat password"
            name="password"
            className={`w-full p-3 my-2 border ${error.password ? "border-red-500" : "border-gray-300"} rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500`}
            onChange={handleChange}
            required
          />
          {error.password && <p className="text-red-500 text-right text-sm">{error.password}</p>}

           <input
            type="password"
            placeholder="konfirmasi password"
            name="confirmPassword"
            className={`w-full p-3 my-2 border ${error.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-red-500`}
            onChange={handleChange}
            required
          />
          {error.confirmPassword && <p className="text-red-500 text-right text-sm">{error.confirmPassword}</p>}

          <button className="w-full bg-red-500 text-white p-3 rounded-md mt-4 hover:bg-red-600">
            Masuk
          </button>
          <p className="text-sm text-gray-600 mt-4 text-center">
            sudah punya akun? <span className="cursor-pointer">login <a href="/login" className="text-red-500 font-semibold">di sini</a></span>
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
          className="w-3/4 object-cover h-screen"
        />
      </div>
    </div>
  );
};

export default Register;
