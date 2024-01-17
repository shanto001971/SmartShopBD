import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const CreateSellerPageBanner = () => {

    const [axiosSecure] = useAxiosSecure()


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
            const result = await axiosSecure.post('/sellerProfile', sellerProfile);
            if (result?.data?.insertedId) {toast.success('LogIn Success') }
        } else {
            toast.error('Wrong Password')
        }

    };

    


    return (
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
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                type="Email"
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
                                type="tel"
                                name="password"  // Use the correct name attribute
                                placeholder="Enter your Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="tel"
                                name="confirmPassword"  // Use the correct name attribute
                                placeholder="Enter your confirm Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateSellerPageBanner;