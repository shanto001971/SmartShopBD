import { useContext } from "react";
import { FaGooglePlusG, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const SocialLogIn = () => {
    const { googleLogin, facebookLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [axiosSecure] = useAxiosSecure();


    const handelGoogleLogIn = async () => {
        const res = await googleLogin()
        if (res?._tokenResponse?.email) {
            const logUser = { email: res?.user?.email }
            const resToken = await axiosSecure.post('/jwt', logUser);
            localStorage.setItem('access-token', resToken?.data?.token);
            toast.success('LogIn SuccessFully')
            navigate(from, { replace: true });
        }
    }

    const handelFacebookLogIn = async () => {
        const res = await facebookLogin();
        console.log(res)
        if (res?.user?.email) {
            const logUser = { email: res?.user?.email }
            const res = await axiosSecure.post('/jwt', logUser);
            localStorage.setItem('access-token', res?.data?.token);
            toast.success('LogIn SuccessFully')
            navigate("/");
        }
    }

    const handelGitHubLigIn = async () => {
        const res = await githubLogin();
        if (res?.user?.email) {
            const logUser = { email: res?.user?.email }
            const res = await axiosSecure.post('/jwt', logUser);
            localStorage.setItem('access-token', res?.data?.token);
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