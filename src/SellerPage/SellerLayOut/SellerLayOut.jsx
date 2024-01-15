import { Outlet } from "react-router-dom";
import SellerNavBar from "../SellerNavBar/SellerNavBar";


const SellerLayOut = () => {
    return (
        <div>
            <SellerNavBar/>
            <Outlet/>
        </div>
    );
};

export default SellerLayOut;