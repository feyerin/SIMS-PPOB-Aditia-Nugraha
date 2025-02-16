import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getService } from "store/actions/service";

const Service = () => {
    const dispatch = useDispatch();

    const [services, setServices] = useState([])

    const service = useSelector((state) => state.service);

    useEffect(() => {
        dispatch(getService());
    }, []);

    useEffect(() => {
        setServices(service.data);
    }, [service]);

  return (
    <div className="mt-8 grid grid-cols-12 text-center max-w-7xl mx-auto">
        {services.map((service, index) => (
            <Link to="/payment"  state= {{ user: service }} key={index} className="flex flex-col items-center p-4 rounded-lg">
                <img src={service.service_icon} alt="img" className="text-3xl"/>
                <p className="mt-2 text-sm text-gray-700">{service.service_name}</p>
            </Link>
        ))}
    </div>
  );
};

export default Service;
