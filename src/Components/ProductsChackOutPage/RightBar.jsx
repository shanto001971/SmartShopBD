import { CiLocationOn } from "react-icons/ci";
import { LuCar } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";

const RightBar = () => {
    return (
        <div className="w-full border p-5">
            <div className="w-full ">
                <p className="font-bold">Delivery </p>
                <h1 className="flex justify-around gap-3 items-center mt-2"><span><CiLocationOn className="w-5 h-5" /></span> <span>Dhaka, Dhaka North,<br /> Banani Road No. 12 - 19</span> <span className="link-primary">CHANGE</span></h1>
                <div className="flex gap-2 mt-2">
                    <LuCar className="w-5 h-5" />
                    <h2 > <span className="font-bold">Free Delivery</span> <span>15 Dec - 20 Dec</span> </h2>
                </div>
                <small>5 - 10 day(s)</small>
                <small className="p-3 mt-2">Enjoy free shipping promotion <br /> with minimum spend of ৳ 499 from Galaxy E-Store.</small>
            </div>
            <div className="border mt-5 p-2">
                <p className="flex  items-center lg:justify-center gap-3 "><BsCashCoin className="w-5 h-5" /> <span className="font-bold">Cash on Delivery Available</span></p>

            </div>

            <hr />

            <div className="mt-5">
                <small >Service</small>
                <p className="mt-3"><span className="font-semibold">7 Days Returns</span> <br /> <small>hange of mind is not applicable</small> </p>
                <p className="">Warranty not available</p>
            </div>

            <div className="mt-5">
                <small>Sold by</small>
                <div className="flex justify-between">
                    <p>Galaxy E-Store</p>
                    <p className="uppercase link-primary">CHAT</p>
                </div>

                <div className="flex mt-2">
                    <div className="p-1 border">
                        <small>Positive Seller Ratings</small>
                        <h1 className="text-3xl">78%</h1>
                    </div>
                    <div className="p-1 border">
                        <small>Ship on Time</small>
                        <h1 className="text-3xl">97%</h1>
                    </div>
                    <div className="p-1 border">
                        <small>Chat Response Rate</small>
                        <h1 className="text-3xl">96%</h1>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default RightBar;