import { Link } from "react-router-dom";


const SellerNavBar = () => {
    return (
        <div className="navbar bg-slate-200 lg:px-10">
            <div className="flex-1">
                <Link to="/">
                    <div className="lg:mx-10">
                        <img className="w-12 h-12" src="https://i.ibb.co/tbpvpMM/www-deshihawker-com-free-logo-e-commerce-11564258090k03hqojlfy-removebg-preview.png" alt="" />
                    </div>
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SellerNavBar;