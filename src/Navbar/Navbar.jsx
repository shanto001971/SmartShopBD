
import { BsCart } from "react-icons/bs";
import { CiBookmark, CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="drawer bg-black z-10">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar  bg-transparent flex justify-between">
                    <div className="lg:mx-10">

                        <img className="w- h-6" src="https://pngimg.com/d/nike_PNG4.png" alt="" />
                    </div>
                    <div className="w-[50%]">
                        <form className="flex items-center w-full relative">
                            <input className="bg-white p-2 rounded-s-lg w-full" type="text" />
                            <button className="bg-white text-black p-3 px-4 rounded-r-lg "><CiSearch /></button>
                            <select
                                className="absolute right-12 py-[7px]"
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
                    <div className="flex-none justify-evenly hidden lg:block ">
                        <div className="flex justify-between items-center w-full mr-10 p-6 ">
                            <div className="text-slate-300 pr-6 border-e-2">
                                <p>Login / SignUp</p>
                                <button className="flex items-center gap-2 font-medium ">My account <FaAngleDown /></button>
                            </div>

                            <div className="flex items-center gap-5  ml-3 text-white ">
                                <div className="relative">
                                    <BsCart className="w-6 h-6" />
                                    <div className="badge badge-secondary p-[5px] rounded-full absolute -top-3 -right-3">0</div>
                                </div>
                                <CiBookmark className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side ">
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