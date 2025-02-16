

import { Logo } from "../../assets/index";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border-b">
            <nav className=" px-6 flex items-center justify-between max-w-7xl mx-auto">
                <a href="dashboard" className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-6" />
                    <span className="font-bold text-gray-800">SIMS PPOB</span>
                </a>
                <div className="flex space-x-6">
                <NavLink
                    to="/topup"
                    className={({ isActive }) =>
                    isActive
                        ? "text-red-500 font-semibold border-b-2 border-red-500 py-4"
                        : "text-gray-700 hover:text-red-500 py-4"
                    }
                >
                    Top Up
                </NavLink>
                <NavLink
                    to="/transaksi"
                    className={({ isActive }) =>
                    isActive
                        ? "text-red-500 font-semibold border-b-2 border-red-500 py-4"
                        : "text-gray-700 hover:text-red-500 py-4"
                    }
                >
                    Transaction
                </NavLink>
                <NavLink
                    to="/akun"
                    className={({ isActive }) =>
                    isActive
                        ? "text-red-500 font-semibold border-b-2 border-red-500 py-4"
                        : "text-gray-700 hover:text-red-500 py-4"
                    }
                >
                    Akun
                </NavLink>
                </div>
            </nav>
        </nav>
    )
}

export default Navbar



