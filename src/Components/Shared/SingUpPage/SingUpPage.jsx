import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import SocialLogIn from "../SocialLogIn/SocialLogIn";


const SingUpPage = () => {

    const { singUpUser, setUser, UpdateUserProfile, UserEmailVerify, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // Send email verification
            // await UserEmailVerify();

            // // Check if the email is verified
            // if (!user.currentUser.emailVerified) {
            //     alert("Please verify your email before logging in.");
            //     return; // Stop the login process
            // }

            // Continue with the sign-up process
            const result = await singUpUser(email, password);

            // Update user profile
            await UpdateUserProfile(name);

            setUser(result.user);

            if (result.user) {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className="h-[100vh] lg:p-20">
            <div className="lg:flex justify-around h-[80vh] shadow-2xl lg:rounded-3xl">
                <div className="w-full flex justify-center items-center rounded-s-2xl bg-slate-100">
                    <form onSubmit={handleSignUp} className="lg:w-[60%] w-full p-10 lg:p-0">
                        <SocialLogIn/>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        <button className="btn bg-[#FE492E] hover:bg-[#FE492E] mt-5 w-full text-white">Sign Up</button>
                    </form>
                </div>

                <div className="mt- lg:mt-0 p-14 lg:p-0 w-full flex justify-center items-center bg-[#FE492E] lg:rounded-e-3xl">
                    <div className="text-white">
                        <h1 className="text-3xl">Welcome Back</h1>
                        <p>
                            To keep connected with us please login
                            <br />
                            With your personal information
                        </p>
                        <Link to="/login"><button className="btn bg-[#FE492E] mt-5 w-28 hover:bg-[#FE492E]  text-white">Log In</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingUpPage;