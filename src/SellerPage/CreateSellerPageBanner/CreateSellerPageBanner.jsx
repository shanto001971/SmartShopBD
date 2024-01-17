import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const CreateSellerPageBanner = () => {

    const { user, updateUserPhoneNumber } = useContext(AuthContext);
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [error, setError] = useState(null);
    

    const handleUpdatePhoneNumber =async (e) => {
        e.preventDefault()
        setError(null); // Clear previous errors
      const result = await  updateUserPhoneNumber(newPhoneNumber)
        console.log(result)
            // .then((result) => {
            //     console.log(result);
            //     toast.success("success")
            // })
            // .catch((error) => {
            //     console.error("Error updating phone number", error);
            //     setError("Error updating phone number. Please try again.");
            //     toast.error("Error updating phone number. Please try again.")
            // });
    };

    console.log(user)
    console.log(newPhoneNumber)

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
                    <form onSubmit={handleUpdatePhoneNumber} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"  // Use the correct name attribute
                                placeholder="Enter your phone number"
                                className="input input-bordered"
                                value={newPhoneNumber}
                                onChange={(e) => setNewPhoneNumber(e.target.value)}
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