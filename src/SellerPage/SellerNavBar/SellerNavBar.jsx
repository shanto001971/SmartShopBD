

const SellerNavBar = () => {
    return (
        <div className="navbar bg-slate-200 lg:px-10">
            <div className="flex-1">
                <div className="">
                    <h1 className="text-2xl">SS mart</h1>
                    <small>Seller Center</small>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="lg:flex gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Eamil" className="input input-bordered h-8 md:h-12 w-36 md:w-auto" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Password" className="input input-bordered h-8 md:h-12 w-36 md:w-auto" />
                    </div>
                </div>
                <button className="btn   md:btn-md lg:btn-md">Log In</button>
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