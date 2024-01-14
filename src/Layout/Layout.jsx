import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavItemMenu from "../Navbar/NavItem/NavItemMenu";
import DrawerComp from "../Components/DrawerComp/DrawerComp";


const Layout = () => {
    return (
        <div>
            <DrawerComp />
            <Navbar/>
            <NavItemMenu/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;