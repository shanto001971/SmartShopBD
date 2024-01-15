

const CreateSellerPageBanner = () => {
    
    
    return (
        <div style={{ backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-blue-geometric-flattened-taobao-e-commerce-coupon-background-image_262564.jpg')` }} className="h-screen relative overflow-hidden lg:flex gap-2">
            <div className="w-[50%]">
                <div className="p-10">
                    <h1 className="text-5xl font-medium text-[#446AF9]">Bangladesh's #1 <br /> Marketplace</h1>
                    <p className="text-2xl ">Create account in 5 minutes and reach millions of customers today!</p>
                </div>
                <img className="absolute bottom-0 left-0 h-[70%]" src="https://gw.alicdn.com/imgextra/i2/O1CN01CbATtG1myaDFcaPFt_!!6000000005023-2-tps-1173-790.png" alt="" />
            </div>
            <div className="w-[50%] flex justify-center items-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="phone number" placeholder="+88 Enter Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateSellerPageBanner;