
import { BsCart } from "react-icons/bs";
import { CiBookmark, CiSearch, CiMenuFries } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useCart } from "../hooks/useCart";
import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";




const Navbar = () => {
    const { user, setSearchData, toggleDrawer } = useContext(AuthContext)
    const [cart, refetch] = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate()

   



    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const response = await axiosSecure.get('/api/search', {
                params: { query: searchQuery, category: selectedCategory },
            });

            setSearchData(response.data);
            setSearchQuery('');

            if (response.data.length > 0) {
                navigate('/search-results');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // console.log(isOpen)
    // refetch()

    return (
        <div className="flex flex-col bg-black">
            {/* Navbar */}
            <div className="w-full navbar  bg-transparent flex justify-between">
                <Link to="/">
                    <div className="lg:mx-10">
                        <img className="w-12 h-12" src="https://i.ibb.co/tbpvpMM/www-deshihawker-com-free-logo-e-commerce-11564258090k03hqojlfy-removebg-preview.png" alt="" />
                    </div>
                </Link>
                <div className="w-[50%]">
                    <form className="flex items-center w-full relative" onSubmit={handleSearch} >
                        <input
                            className="bg-white p-2 rounded-s-2xl lg:rounded-s-lg w-full"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="bg-white text-black p-3 px-4 rounded-r-2xl lg:rounded-r-lg"><CiSearch /></button>
                        <select
                            className="absolute right-12 py-[7px] hidden lg:block"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option className="" value="" >All categories <FaAngleDown /></option>
                            <option value="Smartwatches & Accessories">Smartwatches</option>
                            <option value="Wireless Earbuds">Wireless Earbuds</option>
                            <option value="Luxury Watches">Luxury Watches</option>
                            <option value="Women's Dresses">Women Dresses</option>
                            <option value="Shoulder Bags">Shoulder Bags</option>
                            <option value="Men's Shirt">Mens Shirt</option>
                            <option value="Men's Hoodies">Mens Hoodies</option>
                        </select>
                    </form>
                </div>
                <div className="flex-none lg:justify-evenly">
                    <div className="flex justify-between items-center w-full lg:p-6">
                        <div className="hidden lg:block">
                            {
                                user ? <div className="text-slate-300 pr-6 border-e-2">
                                    {user ? <p>Hi..{user?.displayName}</p> : <p>Login / SignUp</p>}
                                    <button className="flex items-center gap-2 font-medium ">My account <FaAngleDown /></button>
                                </div> : <Link to="/logIn">
                                    <div className="text-slate-300 pr-6 border-e-2 ">
                                        <p>Login / SignUp</p>
                                        <button className="flex items-center gap-2 font-medium " >My account <FaAngleDown /></button>
                                    </div>
                                </Link>
                            }
                        </div>
                        <div className="flex items-center gap-3 lg:gap-5  ml-3 text-white ">
                            <Link to="/cartPage">
                                <div className="relative">
                                    <BsCart className="w-6 h-6" />
                                    <div className="badge badge-secondary p-[5px] rounded-full absolute -top-3 -right-3"><span className="text-xs">{cart?.length}</span></div>
                                </div>
                            </Link>
                            <CiBookmark className="w-6 h-6" />
                            <button onClick={() => toggleDrawer()}><CiMenuFries className="w-6 h-6" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;