import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavItemMenu from "../Navbar/NavItem/NavItemMenu";


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <NavItemMenu/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;