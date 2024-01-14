import { useContext } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AuthContext } from '../../Provider/AuthProvider';

const DrawerComp = () => {
    const { isOpen,toggleDrawer } = useContext(AuthContext)
    // console.log(isOpen)
    return (
        <div>
            <Drawer
                open={isOpen}
                onClose={()=>toggleDrawer()}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </div>
    );
};

export default DrawerComp;