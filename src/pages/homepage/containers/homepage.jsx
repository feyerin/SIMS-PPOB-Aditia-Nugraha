import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../../assets/banner";
import Profiles from "../../../components/organs/profiles";
import Service from "../components/service";

const promotions = [
    {
        image: Banner1,
        bgColor: "bg-red-500",
    },
    {
        image: Banner2,
        bgColor: "bg-red-500",
    },
    {
        image: Banner3,
        bgColor: "bg-red-500",
    },
    {
        image: Banner4,
        bgColor: "bg-red-500",
    },
    {
        image: Banner5,
        bgColor: "bg-red-500",
    },

  ];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Profile & Balance */}
      <Profiles />

      {/* Services */}
      <Service/>

      {/* promotion */}
      <div className="py-10 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Temukan promo menarik</h2>
        <div className="grid grid-cols-4">
            {promotions.map((promo, index) => (
            <div key={index} className={`rounded-xl pr-6 text-white flex items-center`}> 
                <img src={promo.image} alt="img" className="w-full h-full object-cover rounded-xl" />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
