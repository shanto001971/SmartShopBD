import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const UserLogInPage = () => {

    const { LogInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";
    const [axiosSecure] = useAxiosSecure();

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {


            // Continue with the login process
            const result = await LogInUser(email, password);
            console.log(result)

            if (result.user) {
                
                const logUser = { email: result?.user?.email }
                const res = await axiosSecure.post('/jwt', logUser);
                localStorage.setItem('access-token',res?.data?.token);
                toast.success('LogIn SuccessFully')
                navigate(froms, { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="lg:h-[100vh] lg:p-20 ">
            <Toaster />
            <div className="lg:flex justify-around lg:h-[80vh] shadow-2xl rounded-3xl p-2 mt-5 lg:p-0 lg:mt-0">
                <div className="w-full flex justify-center items-center bg-[#FE492E] rounded-t-3xl lg:rounded-s-3xl lg:rounded-e-none p-10 ">
                    <div className="text-white">
                        <h1 className="text-3xl">Hello, Friends</h1>
                        <p>
                            Enter your personal details to use all
                            <br />
                            of site features
                        </p>
                        <Link to="/SignUp"><button className="btn bg-[#FE492E] mt-5 w-28 hover:bg-[#FE492E]  text-white">Sign Up</button></Link>
                    </div>

                </div>
                <div className="w-full lg:flex justify-center items-center lg:rounded-e-2xl  p-2">
                    <form onSubmit={handleSignIn} className="lg:w-[60%] m-5 mt-10 ">
                        <h1 className="text-3xl mb-5 mt-5 lg:mt-0 hidden lg:block">LogIn Your Account</h1>
                        <SocialLogIn />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <button className="btn bg-[#FE492E] hover:bg-[#FE492E] mt-5 w-full text-white">Log In</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default UserLogInPage;