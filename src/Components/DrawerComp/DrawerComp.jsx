import { useContext } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { CiLogout, CiLogin } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSell } from "react-icons/md";
import { LuHelpCircle } from "react-icons/lu";





const DrawerComp = () => {
    const { isOpen, toggleDrawer, LogOutUser, user } = useContext(AuthContext);



    const handelLogOut = () => {
        LogOutUser()
            .then(() => {
                localStorage.removeItem('access-token');
            })
            .catch(() => { })
    }

    function checkTokenExpiration() {
        const token = localStorage.getItem('access-token');
        if (token) {
            try {
                const tokenData = JSON.parse(atob(token.split('.')[1])); // Decode token payload
                const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds

                // Calculate the expiration time by adding 1 hour (3600 seconds) in milliseconds
                const expirationThreshold = Date.now() + 3600 * 1000;

                if (expirationThreshold >= expirationTime) {
                    // Token has expired
                    localStorage.removeItem('access-token');
                    handelLogOut()
                }
            } catch (error) {
                console.error('Error decoding or parsing token:', error);
            }
        }
    }
    setInterval(checkTokenExpiration, 60000);

    return (
        <Drawer
            open={isOpen}
            onClose={() => toggleDrawer()}
            direction='right'
            className='drawer-container sm:w-1/2 md:w-2/3 lg:w-1/3'
        >
            <div className='p-4 flex flex-col gap-3'>
                <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                    <button className='cursor-pointer flex items-center gap-2 font-medium'><CgProfile /> <h6>Profile</h6></button>
                </div>

                <Link to={'/ConfirmOrderPage'}>
                    <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                        <button className='cursor-pointer flex items-center gap-2 font-medium'><FiShoppingBag /> <h6>My Order</h6></button>
                    </div>
                </Link>

                <Link>
                    <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                        <button className='cursor-pointer flex items-center gap-2 font-medium'><RiDashboardLine /> <h6>Dashboard</h6></button>
                    </div>
                </Link>

                <Link to={`/sellerLogIn`}>
                    <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                        <button className='cursor-pointer flex items-center gap-2 font-medium'><MdOutlineSell /> <h6>Become a Seller</h6></button>
                    </div>
                </Link>

                <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                    <button className='cursor-pointer flex items-center gap-2 font-medium'><LuHelpCircle /> <h6> Help & Support</h6></button>
                </div>


                <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                    {
                        user ?
                            <button className='cursor-pointer flex items-center gap-2' onClick={() => handelLogOut()}><CiLogout /> LogOut</button> :
                            <Link to={"/logIn"}><button className='cursor-pointer flex items-center gap-2'><CiLogin /> Log In</button></Link>
                    }
                </div>

            </div>
        </Drawer>
    );
};

export default DrawerComp;
