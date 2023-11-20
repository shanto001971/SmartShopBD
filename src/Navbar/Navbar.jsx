
import Home from "../Home/Home";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiBookmark, CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="drawer bg-transparent ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar  bg-transparent z-10 ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 items-center gap-4 px-2 lg:ml-10">
                        
                        <img className="w- h-6" src="https://pngimg.com/d/nike_PNG4.png" alt="" />
                    </div>
                    <div className="flex-none justify-evenly hidden lg:block ">
                        <div className="flex justify-around items-center w-full mr-10">
                            <div className="bg-[#1A1C1B]  flex gap-5 px-3 p-1 rounded-xl text-slate-300 items-center">
                                <NavLink className={({ isActive, isPending }) =>
                                    isActive
                                        ? "bg-white text-black rounded-3xl px-3 p-1"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/Collection"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "bg-white text-black rounded-xl px-5 p-3"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }>
                                    Collection
                                </NavLink>
                                <NavLink
                                    to="/Fashion"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "bg-white text-black rounded-xl px-3"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >
                                    Fashion
                                </NavLink>
                                <NavLink
                                    to="/New Collection"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "bg-white text-black rounded-xl px-3"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >
                                    New Collection
                                </NavLink>
                                <NavLink
                                    to="/Kids"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "bg-white text-black rounded-xl px-3"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >
                                    Kids
                                </NavLink>
                                <NavLink
                                    to="/Woman Collection"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-white text-black rounded-xl px-3"
                                            : ""

                                    }
                                >
                                    Woman Collection
                                </NavLink>
                            </div>
                            <ul className="menu menu-horizontal bg-[#1A1C1B]  flex gap-5  p-0 rounded-xl text-slate-300 border ">
                                {/* Navbar menu content here */}
                                <div className="">
                                    <form className="flex items-center">
                                        <input className="bg-[#1A1C1B] p-2 rounded-lg" type="text" />
                                        <button className="bg-white text-black p-3 px-4 rounded-lg"><CiSearch /></button>
                                    </form>
                                </div>
                            </ul>
                            <div className="flex items-center gap-5 mr-10 ml-3 text-white">
                                <TiShoppingCart className="w-6 h-6" />
                                <CiBookmark className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <Home />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;