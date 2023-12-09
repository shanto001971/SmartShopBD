import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UserLogInPage = () => {

    const { LogInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            

            // Continue with the login process
            const result = await LogInUser(email, password);

            if (result.user) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="h-[100vh] lg:p-20 ">
            <div className="lg:flex justify-around h-[80vh] shadow-2xl rounded-3xl">
                <div className="w-full flex justify-center items-center bg-[#FE492E] lg:rounded-s-3xl p-10 ">
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
                <div className="w-full flex justify-center items-center lg:rounded-e-2xl bg-slate-100 ">
                    <form onSubmit={handleSignIn} className="lg:w-[60%] pb-5 lg:pb-0">
                        <h1 className="text-3xl mb-5 mt-5 lg:mt-0">LogIn Your Account</h1>
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