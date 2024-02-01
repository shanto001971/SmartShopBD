import { useContext } from "react";
import { FaGooglePlusG, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const SocialLogIn = () => {
    const { googleLogin, facebookLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();



    const handelGoogleLogIn = async () => {
        const res = await googleLogin()
        if (res?.user?.email) {
            toast.success('LogIn SuccessFully')
            navigate("/");
        }
    }

    const handelFacebookLogIn = async () => {
        const res = await facebookLogin();
        if (res?.user?.email) {
            toast.success('LogIn SuccessFully')
            navigate("/");
        }
    }

    const handelGitHubLigIn = async () => {
        const res = await githubLogin();
        if (res?.user?.email) {
            toast.success('LogIn SuccessFully')
            navigate("/");
        }
    }

    return (
        <div className="flex justify-center items-center gap-5">
            <Toaster />
            <button onClick={() => handelGoogleLogIn()} className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl">
                <FaGooglePlusG className="w-8 h-8" />
            </button>
            <button onClick={() => handelFacebookLogIn()} className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl" >
                <TiSocialFacebook className="w-8 h-8" /></button>
            <button onClick={() => handelGitHubLigIn()} className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl" >
                <FaGithub className="w-8 h-8" />
            </button>
            <button className="bg-white shadow-lg p-1 lg:p-2 rounded-lg hover:shadow-2xl">
                <FaLinkedinIn className="w-8 h-8" />
            </button>
        </div>
    );
};

export default SocialLogIn;