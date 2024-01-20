import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSeller from "../../hooks/useSeller";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateSellerPageBanner = () => {

    const [axiosSecure] = useAxiosSecure();
    const [toggolForm, setToggolForm] = useState(true);
    const [logEmail, setLogEmail] = useState();
    const [isSeller, isSellerLoading] = useSeller(logEmail);
    const navigate = useNavigate();

    const handleUpdateSeller = async (e) => {
        e.preventDefault()
        const info = e.target;
        const phoneNumber = info.phoneNumber.value;
        const email = info.email.value;
        const password = info.password.value;
        const confirmPassword = info.confirmPassword.value;
        const roll = { seller: true };

        if (password === confirmPassword) {
            const sellerProfile = { phoneNumber: phoneNumber, email: email, password: password, roll: roll }
            try {
                // Send a POST request to the Express.js server
                const response = await axiosSecure.post('/sellerProfile', { sellerProfile });

                // Check for success status in the response
                if (response.data.success) {
                    toast.success('Profile updated successfully');
                    // You can perform additional actions based on the success response if needed
                } else {
                    toast.error(response.data.error || 'Email Already Use');
                }
            } catch (error) {
                console.error('Error while sending POST request:', error);
                toast.error('An error occurred');
                // Handle the error, show a toast, or perform other actions as needed
            }
        } else {
            // Show an error message using your preferred notification method (e.g., toast)
            console.error('Wrong Password');
            toast.error('Wrong Password');
        }

    };

    console.log(isSeller, isSellerLoading)

    const handelSellerLogin = (e) => {
        e.preventDefault();
        // const info = e.target;
        // const email = info.email.value;
        // setLogEmail(email);
    };

    useEffect(() => {
        // When isSeller changes, check if it is true and navigate to the seller profile
        if (isSeller && !isSellerLoading) {
            navigate('/sellerLayOutCenter/sellerProfile');
        }
    }, [isSeller, isSellerLoading, navigate]);



    return (
        <div className="">
            <div style={{ backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-blue-geometric-flattened-taobao-e-commerce-coupon-background-image_262564.jpg')` }} className="h-screen relative overflow-hidden lg:flex gap-2">

                <Toaster />
                <div className="lg:w-[50%]">
                    <div className="p-10">
                        <h1 className="text-5xl font-medium text-[#446AF9]">{`Bangladesh's #1 `}<br /> Marketplace</h1>
                        <p className="text-2xl ">Create account in 5 minutes and reach millions of customers today!</p>
                    </div>
                    <img className="absolute bottom-0 left-0 h-[70%] hidden lg:block" src="https://gw.alicdn.com/imgextra/i2/O1CN01CbATtG1myaDFcaPFt_!!6000000005023-2-tps-1173-790.png" alt="" />
                </div>
                <div className="lg:w-[50%] flex justify-center items-center">
                    {
                        !toggolForm ? (<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-transparent backdrop-blur-2xl">
                            <form onSubmit={handleUpdateSeller} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"  // Use the correct name attribute
                                        placeholder="Enter your phone number"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"  // Use the correct name attribute
                                        placeholder="Enter your Email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"  // Use the correct name attribute
                                        placeholder="Enter your Password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"  // Use the correct name attribute
                                        placeholder="Enter your confirm Password"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Create Account</button>
                                </div>
                                <small onClick={() => setToggolForm(!toggolForm)} className="cursor-pointer link">Already have a Account</small>
                            </form>
                        </div>)


                            :

                            (
                                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-transparent backdrop-blur-2xl">
                                    <form onSubmit={handelSellerLogin} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter Email"
                                                className="input input-bordered"
                                                required
                                                onChange={(event) => setLogEmail(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type="submit" disabled={isSellerLoading} className="btn btn-primary">{isSellerLoading ? "Loading..." : "Log In"}</button>
                                        </div>
                                        <small onClick={() => setToggolForm(!toggolForm)} className="cursor-pointer link">Become a New seller</small>
                                    </form>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateSellerPageBanner;