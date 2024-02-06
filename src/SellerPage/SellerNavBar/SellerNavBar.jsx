import { Link, useNavigate } from "react-router-dom";
import useSeller from "../../hooks/useSeller";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SellerNavBar = () => {
    const navigate = useNavigate()
    const [sellerData, isSellerLoading, refetch] = useSeller();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [axiosSecure] = useAxiosSecure();

    const handleLogOut = () => {
        localStorage.removeItem('sellerToken');
        localStorage.removeItem('userId');
        navigate('/sellerLogIn');

    };

    const handleSearch = async (event) => {
        event.preventDefault();


        try {
            const response = await axiosSecure.get('/api/search', {
                params: { query: searchQuery, category: selectedCategory },
            });

            console.log(response.data);

            if (response.data.length > 0) {
                navigate('/search-results');
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="navbar bg-slate-200 px-5 lg:px-5 flex gap-2">
            <div className="flex-1">
                <Link to="/">
                    <div className="lg:mx-10 w-12 h-12">
                        <img className="w-12 h-12" src="https://i.ibb.co/tbpvpMM/www-deshihawker-com-free-logo-e-commerce-11564258090k03hqojlfy-removebg-preview.png" alt="" />
                    </div>
                </Link>
            </div>

            <div className="">
                <form className="flex items-center w-full" onChange={handleSearch} >
                    <input
                        className="bg-white p-2 rounded-s-2xl lg:rounded-s-lg w-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="bg-white text-black p-3 px-4 rounded-r-2xl lg:rounded-r-lg"><CiSearch /></button>
                </form>
            </div>

            {
                sellerData && (<div className="flex-none gap-3">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                        <div className="w-[50%]">
                        </div>

                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <button onClick={() => handleLogOut()}><li><a>Logout</a></li></button>
                        </ul>
                    </div>
                    <label htmlFor="my-drawer-2" className="lg:hidden drawer-button"><CiMenuFries /></label>
                </div>)
            }


        </div>
    );
};

export default SellerNavBar;