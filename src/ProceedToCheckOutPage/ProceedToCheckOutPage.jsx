import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const ProceedToCheckOutPage = () => {
    const {checkOutId}=useContext(AuthContext);
    console.log(checkOutId)

    return (
        <div>
            this is ProceedToCheckOutPage
        </div>
    );
};

export default ProceedToCheckOutPage;