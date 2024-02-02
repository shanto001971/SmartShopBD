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

                <Link to={`/sellerLayOutCenter`}>
                    <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                        <button className='cursor-pointer flex items-center gap-2 font-medium'><MdOutlineSell /> <h6>Become a Seller</h6></button>
                    </div>
                </Link>

                <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                    <button className='cursor-pointer flex items-center gap-2 font-medium'><LuHelpCircle /> <h6> Help & Support</h6></button>
                </div>

                <Link to={"/logIn"}>
                    <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)' }} className="p-2 border rounded-md">
                        {
                            user ?
                                <button className='cursor-pointer flex items-center gap-2' onClick={() => handelLogOut()}><CiLogout /> LogOut</button> :
                                <button className='cursor-pointer flex items-center gap-2'><CiLogin /> Log In</button>
                        }
                    </div>
                </Link>
            </div>
        </Drawer>
    );
};

export default DrawerComp;
