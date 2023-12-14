import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage = () => {
    const [cart, refetch] = useCart();
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
        <div className="w-full lg:px-20">
            <div className="lg:flex w-full ">
                <div className="lg:w-[80%] lg:mr-20 ">
                    <div className=" flex items-center justify-between border lg:p-2  rounded-md">
                        <h1 className="flex items-center gap-3">
                            <input type="checkbox" checked="" className="checkbox checkbox-xs" />
                            SELECT ALL (1 ITEM(S))
                        </h1>
                        <button className="flex items-center gap-2"><RiDeleteBin6Line /> Delete</button>
                    </div>


                    <div className="mt-8 ">
                        <div className="border lg:px-3 ">
                            <h1 className="flex items-center gap-3 mt-4">
                                <input type="checkbox" checked="" className="checkbox checkbox-xs" />
                                Footwear Point
                            </h1>
                            <p className="text-end mb-2"> Earliest Delivery:20 Dec</p>
                        </div>
                        <br />
                        <hr />

                        <div className="">
                            {
                                cart?.map(singleData => <div key={singleData._id} className="mt-1 lg:flex justify-around gap-5 items-center shadow-xl p-5 lg:p-10 rounded-md relative">
                                    <input type="checkbox" checked="" className="checkbox checkbox-xs absolute right-2 top-5 border border-sky-500" />
                                    <div className="h-28 w-28">

                                        <img src={singleData?.productsImage} alt="" />
                                    </div>
                                    <div className="">
                                        <h1>{singleData?.productTitle.slice(0, 60)}</h1>
                                        <small>No Brand,Color Family:White, Lens Color:White, Frame Color:White</small>
                                    </div>
                                    <div className="">
                                        <h3 className="flex gap-4 lg:w-52">
                                            <small className="flex items-center gap-2 bg-slate-200 p-1 rounded-md">
                                                <del>{singleData?.oldPrice}</del>
                                                {singleData?.discounts}% off
                                            </small>
                                            ৳ {singleData?.newPrice}
                                        </h3>
                                    </div>
                                    <div className=" border  p-[5px] flex">
                                        <button className="px-2" onClick={decrementQuantity}>-</button>
                                        <span className="px-6  ">{quantity}</span>
                                        <button className="px-2 " onClick={incrementQuantity}>+</button>
                                    </div>
                                </div>)
                            }
                        </div>


                    </div>


                </div>
                <div className="lg:w-[20%]">
                    right Side
                </div>
            </div>
        </div>
    );
};

export default CartPage;