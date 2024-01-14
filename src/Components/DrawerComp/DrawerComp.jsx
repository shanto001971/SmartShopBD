import { useContext } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { CiLogout,CiLogin } from "react-icons/ci";



const DrawerComp = () => {
    const { isOpen, toggleDrawer, LogOutUser, user } = useContext(AuthContext);
    const handelLogOut = () => {
        LogOutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <Drawer
            open={isOpen}
            onClose={() => toggleDrawer()}
            direction='right'
            className='drawer-container sm:w-1/2 md:w-2/3 lg:w-1/3'
        >
            <div className='p-4'>
                <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)'}} className="p-2 border rounded-md">
                    {
                        user ?
                            <button className='cursor-pointer flex items-center gap-2' onClick={handelLogOut}><CiLogout /> LogOut</button> :
                            <Link to={"/logIn"}><button className='cursor-pointer flex items-center gap-2'><CiLogin /> Log In</button></Link>
                    }
                </div>
            </div>
        </Drawer>
    );
};

export default DrawerComp;
