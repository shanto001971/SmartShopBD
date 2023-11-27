
import { useState } from "react";
import Zoom from "react-img-zoom-gdn";
import ReactStars from "react-rating-stars-component";
const ImageHoverEffect = () => {


    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="mt-10 lg:flex justify-center gap-3 lg:p-4">
            <div className="lg:w-[50%] ">
            <Zoom className="rounded-md" img="https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-1661870227.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*" zoomScale={3} width={600} height={600} />
            </div>
            <div className="lg:flex flex-col gap-5 p-3 lg:p-8">
                <h1 className="text-3xl">Stride in Style: Comfortable and Trendy Footwear for Every Occasion - Shop Now for the Perfect Pair!</h1>
                <p className="bg-red-600 px-1 w-20 rounded">Save 40%</p>
                <div className="mt-10">
                    <p>Smart shoes shop</p>
                    <p className="flex items-center gap-2">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#FED900"
                        />
                        4 reviews
                    </p>
                </div>

                <hr />

                <div className="">
                    <h3>
                        Color: white
                    </h3>
                    <div className="flex gap-2 mt-2">
                        <div className="p-3 bg-white border border-red-500 w-10"></div>
                        <div className="p-3 bg-black border border-red-500 w-10"></div>
                        <div className="p-3 bg-amber-300 border border-red-500 w-10"></div>
                    </div>
                    <p className="text-2xl mt-3">Price: 3000 <span>Tk: 3,800</span></p>
                    <div className="mt-4 border w-44 p-[10px] flex">
                        <button className="px-5" onClick={decrementQuantity}>-</button>
                        <span className="px-6  ">{quantity}</span>
                        <button className="px-5 " onClick={incrementQuantity}>+</button>
                    </div>
                    <div className="w-full mt-10 lg:flex gap-2">
                        <button className="w-full lg:w-[50%] bg-[#EA33B6] p-2 rounded text-white">Add to cart</button>
                        <br />
                        <button className="w-full mt-2 lg:w-[50%] bg-[#3A2A2F] p-2 rounded text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageHoverEffect;