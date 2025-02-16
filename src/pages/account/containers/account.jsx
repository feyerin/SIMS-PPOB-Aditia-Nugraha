import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/auth";
import { useNavigate } from "react-router-dom";
import { getProfile, updateImageProfile, updateProfile } from "../../../store/actions/profile";

const Account = () => {
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.profile);

  const [profile, setProfile] = useState({
    email: "wallet@nutech.com",
    first_name: "Kristanto",
    last_name: "Wibowo",
    profile_image: ""
  });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(getProfile());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProfile(data);
    setSelectedFile(profile.profile_image);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

   // Validasi file format
  const validateFile = (file) => {
    const allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Hanya file PNG atau JPEG yang diperbolehkan.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  // Handle file selection
  const handleFileChange = (event) => {

    const file = event.target.files[0];
    if (file && validateFile(file)) {
      console.log("profile", file);

      setSelectedFile(file);
      handleUpload();
    }
  };

  // Handle form submit
  const handleUpload = () => {
    if (selectedFile) {
      dispatch(updateImageProfile(selectedFile));
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({first_name: profile.first_name, last_name: profile.last_name}))
    setIsEdit(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center p-10">
      <div className="mt-6 flex flex-col items-center">
        <div className="relative">
          <img
            src={selectedFile} 
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />

          <div className="absolute bottom-0 right-0 border rounded-full p-1 shadow-md">
              <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer bg-white">
                ✏️             
               </label>
              <input id="upload" accept="image/png, image/jpeg" onChange={handleFileChange} type="file" className="hidden" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-3">{profile.first_name} {profile.last_name}</h3>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xl mt-6">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nama Depan</label>
          <input
            type="text"
            name="first_name"
            value={profile.first_name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Nama Belakang</label>
          <input
            type="text"
            name="last_name"
            value={profile.last_name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1"
          />
        </div>
        {
          !isEdit ? (
            <div>
              <button
                type="button"
                onClick={() => setIsEdit(true)}
                className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 mb-4"
              >
                Edit profil
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full bg-white text-red-500 py-3 rounded-md font-semibold border border-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
            >
              Simpan
            </button>
          )    
        }  
      </form>
    </div>
  );
};

export default Account;