
import { BsCart } from "react-icons/bs";
import { CiBookmark, CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useCart } from "../hooks/useCart";
import { useEffect } from "react";

const Navbar = () => {
    const { user, LogOutUser } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState('');
    const [cart, refetch] = useCart();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handelLogOut = () => {
        LogOutUser()
            .then(() => { })
            .catch(() => { })
    }


    // console.log(cart)

    // useEffect(() => {
    //     fetch(`https://smart-shop-bd-server-side.vercel.app/carts?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [user?.email])

    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col bg-black">
                {/* Navbar */}
                <div className="w-full navbar  bg-transparent flex justify-between">
                    <Link to="/">
                        <div className="lg:mx-10">
                            <img className="w-12 h-12" src="https://i.ibb.co/tbpvpMM/www-deshihawker-com-free-logo-e-commerce-11564258090k03hqojlfy-removebg-preview.png" alt="" />
                        </div>
                    </Link>
                    <div className="w-[50%]">
                        <form className="flex items-center w-full relative">
                            <input className="bg-white p-2 rounded-s-2xl lg:rounded-s-lg w-full" type="text" />
                            <button className="bg-white text-black p-3 px-4 rounded-r-2xl lg:rounded-r-lg"><CiSearch /></button>
                            <select
                                className="absolute right-12 py-[7px] hidden lg:block"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled>All categories <FaAngleDown /></option>
                                <option value="strapi">Strapi</option>
                                <option value="ghost">Ghost</option>
                                <option value="netlify">Netlify CMS</option>
                                <option value="sanity">Sanity</option>
                            </select>
                        </form>
                    </div>
                    <div className="flex-none lg:justify-evenly">
                        <div className="flex justify-between items-center w-full lg:mr-10 lg:p-6">
                            <div className="hidden lg:block">
                                {
                                    user ? <div className="text-slate-300 pr-6 border-e-2">
                                        {user ? <p>Hi..{user?.displayName}</p> : <p>Login / SignUp</p>}
                                        <button className="flex items-center gap-2 font-medium " onClick={() => document.getElementById('my_modal_1').showModal()}>My account <FaAngleDown /></button>
                                    </div> : <Link to="/logIn">
                                        <div className="text-slate-300 pr-6 border-e-2 ">
                                            <p>Login / SignUp</p>
                                            <button className="flex items-center gap-2 font-medium " >My account <FaAngleDown /></button>
                                        </div>
                                    </Link>
                                }
                            </div>




                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_1" className="modal justify-center ">
                                <div className="modal-box w-full">
                                    <div className="text-center">
                                        <img className="w-24 h-24 mx-auto" src={user?.photoURL ? user?.photoURL : "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"} alt="" />
                                        <h3>{user?.displayName}</h3>
                                        <p>{user?.email}</p>
                                    </div>

                                    <hr className="mt-2" />
                                    <div className="mt-5">
                                        <ul>
                                            <Link><li className="w-full p-1 px-5 rounded-md bg-slate-200 mt-1">Home</li></Link>
                                            <Link><li className="w-full p-1 px-5 rounded-md bg-slate-200 mt-1">Order</li></Link>
                                            <Link><li className="w-full p-1 px-5 rounded-md bg-slate-200 mt-1">Address</li></Link>
                                            <Link><li onClick={handelLogOut} className="w-full p-1 px-5 rounded-md bg-slate-200 mt-1">LogOut</li></Link>
                                        </ul>
                                    </div>
                                    <div className="modal-action w-full">
                                        <form method="dialog w-full flex">
                                            {/* if there is a button in form, it will close the modal */}

                                            <button className="">x</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            <div className="flex items-center gap-5  ml-3 text-white ">
                                <Link to="/cartPage">
                                    <div className="relative">
                                        <BsCart className="w-6 h-6" />
                                        <div className="badge badge-secondary p-[5px] rounded-full absolute -top-3 -right-3"><span className="text-xs">{cart?.length}</span></div>
                                    </div>
                                </Link>
                                <CiBookmark className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <div className="mt-10">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;