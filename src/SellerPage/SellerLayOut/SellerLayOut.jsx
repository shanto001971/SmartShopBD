import { NavLink, Outlet, useNavigate } from "react-router-dom";
import SellerNavBar from "../SellerNavBar/SellerNavBar";
import { MdOutlineSpeed } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { IoSettingsOutline,IoCloudUploadOutline } from "react-icons/io5";
import { LuPieChart } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { FaMoneyBills } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const SellerLayOut = () => {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('sellerToken');
        localStorage.removeItem('userId');
        navigate('/sellerLogIn');

    };


    return (
        <div className="">
            <SellerNavBar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-3">
                    {/* Page content here */}
                    <Outlet />

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 h-screen lg:h-auto  bg-base-200 text-base-content rounded-b-md gap-1">
                        {/* Sidebar content here */}
                        <li className=""><NavLink to={`/sellerLayOutCenter`}><MdOutlineSpeed /> Dashboard</NavLink></li>
                        <li className=""><NavLink><FiTruck /> My Orders</NavLink></li>
                        <li className=""><NavLink> <IoCloudUploadOutline />Upload Product</NavLink></li>
                        <li className=""><NavLink><LuPieChart />Chart</NavLink></li>
                        <li className=""><NavLink><IoMdTrendingUp />Trends</NavLink></li>
                        <li className=""><NavLink><GrContact />Contact</NavLink></li>
                        <li className=""><NavLink><FaMoneyBills />Billing</NavLink></li>
                        <li onClick={() => handleLogOut()} className=""><NavLink><CiLogout /> LogOut</NavLink></li>

                    </ul>
                    <div className="w-[90%] bg-green-300 h-48 mt-5  rounded-lg text-center mx-auto hidden lg:block">
                        <button className="font-bold text-4xl px-3 bg-green-300 border border-white rounded-full -mt-32">?</button>
                        <div className="mt-5">
                            <h1 className="font-medium">Help Center</h1>
                            <p className="text-sm">Having trouble in shop <br /> please contact us for more <br /> question</p>
                        </div>
                        <button className="bg-slate-100 p-2 mt-4 rounded-lg font-semibold px-5">Go to Help Center</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerLayOut;