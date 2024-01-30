import { useContext } from "react";
import { FaGooglePlusG, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const SocialLogIn = () => {
    const { googleLogin, facebookLogin, githubLogin, user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";

    if (user) {
        toast.success('LogIn SuccessFully')
        navigate(froms, { replace: true });
    }

    return (
        <div className="flex justify-center items-center gap-5">
            <Toaster />
            <button onClick={() => googleLogin()} className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl">
                <FaGooglePlusG className="w-8 h-8" />
            </button>
            <button onClick={() => facebookLogin()} className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl" >
                <TiSocialFacebook className="w-8 h-8" /></button>
            <button onClick={() => githubLogin()} className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl" >
                <FaGithub className="w-8 h-8" />
            </button>
            <button className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl">
                <FaLinkedinIn className="w-8 h-8" />
            </button>
        </div>
    );
};

export default SocialLogIn;