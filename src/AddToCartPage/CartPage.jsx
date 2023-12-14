import { useContext, useState } from "react";
import { useCart } from "../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CartPage = () => {
    const { setCheckOutId } = useContext(AuthContext)
    const [cart, refetch] = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const [voucherCode, setVoucherCode] = useState("");
    const [shippingFee, setShippingFee] = useState(69);
    const [axiosSecure] = useAxiosSecure();

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleCheckboxChange = (productId) => {
        const itemIndex = selectedItems.indexOf(productId);

        if (itemIndex === -1) {
            setSelectedItems([...selectedItems, productId]);
        } else {
            const updatedItems = [...selectedItems];
            updatedItems.splice(itemIndex, 1);
            setSelectedItems(updatedItems);

        }
    };

    const calculateSubtotal = () => {
        let total = 0;

        cart.forEach((singleData) => {
            if (selectedItems.includes(singleData._id)) {
                total += singleData.newPrice * quantity;
            }
        });

        return total;
    };

    const calculateTotalPrice = () => {
        const subtotal = calculateSubtotal();
        return subtotal + shippingFee; // Add shipping fee
    };

    const handleVoucherCodeChange = (event) => {
        setVoucherCode(event.target.value);
        // Apply logic to handle voucher code and adjust prices if needed
    };

    console.log(selectedItems)

    const handleSingleItemDelete = async (productId) => {
        try {
            await axiosSecure.delete(`YOUR_API_ENDPOINT/${productId}`);
            refetch(); // Assuming refetch is a function to refresh the cart data
        } catch (error) {
            console.error("Error deleting single item:", error);
        }
    };

    const handleDeleteAll = async () => {
        try {
            await axiosSecure.delete("YOUR_API_ENDPOINT/batch", {
                data: { productIds: selectedItems },
            });
            setSelectedItems([]);
            refetch(); // Assuming refetch is a function to refresh the cart data
        } catch (error) {
            console.error("Error deleting all items:", error);
        }
    };

    const handleProcess = () => {
        setCheckOutId(selectedItems)
    }


    return (
        <div className="w-full">
            <div className="lg:flex w-full lg:px-20">
                <div className="lg:w-[80%] lg:mr-20 ">
                    <div className=" flex items-center justify-between border lg:p-2  rounded-md">
                        <h1 className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={selectedItems.length === cart.length}
                                onChange={() => {
                                    setSelectedItems(
                                        selectedItems.length === cart.length
                                            ? []
                                            : cart.map((item) => item._id)
                                    );
                                }}
                                className="checkbox checkbox-xs" />
                            SELECT ALL ({selectedItems.length} ITEM(S))
                        </h1>
                        <button

                            onClick={handleDeleteAll}
                            className="flex items-center gap-2 cursor-pointer text-red-500"
                            disabled={selectedItems.length === 0}>
                            <RiDeleteBin6Line />
                            Delete
                        </button>
                    </div>


                    <div className="mt-8 ">
                        <div className="border lg:px-3 ">
                            <h1 className="flex items-center gap-3 mt-4">
                                Footwear Point
                            </h1>
                            <p className="text-end mb-2"> Earliest Delivery:20 Dec</p>
                        </div>
                        <br />
                        <hr />

                        <div className="">
                            {
                                cart?.map(singleData => <div key={singleData._id} className="mt-1 shadow-xl p-5 lg:p-10 rounded-md relative">
                                    <input type="checkbox"
                                        checked={selectedItems.includes(singleData._id)}
                                        onChange={() => handleCheckboxChange(singleData._id)}
                                        className="checkbox checkbox-xs absolute right-2 top-5 border border-sky-500" />
                                    <div className=" lg:flex justify-around gap-5 items-center rounded-md">
                                        <div className="h-28 w-28">

                                            <img src={singleData?.productsImage} alt="" />
                                        </div>
                                        <div className="">
                                            <h1>{singleData?.productTitle.slice(0, 60)}</h1>
                                            <small>No Brand,Color Family:White, Lens Color:White, Frame Color:White</small>
                                        </div>

                                    </div>

                                    <div className=" lg:flex justify-around gap-5 items-center p-5 rounded-md">
                                        <div className="">
                                            <h3 className="flex gap-4 lg:w-52">
                                                <small className="flex items-center gap-2 p-1 rounded-md">
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

                                        <button onClick={() => handleSingleItemDelete(singleData._id)} className="flex items-center gap-2 cursor-pointer text-red-500">
                                            <RiDeleteBin6Line />
                                            Delete
                                        </button>
                                    </div>
                                </div>)
                            }
                        </div>


                    </div>


                </div>
                <div className="lg:w-[40%] border lg:p-5">
                    <h1 className="font-medium">Order Summary</h1>
                    <div className="flex justify-between items-center p-3  mt-2 rounded-md ">
                        <small>Subtotal (1 items)</small>
                        <small>৳ {calculateSubtotal()}</small>
                    </div>

                    <div className="flex justify-between items-center p-3  mt-2 rounded-md ">
                        <small>Shipping Fee</small>
                        <small>৳ {shippingFee}</small>
                    </div>

                    <div className="flex items-center mt-2 border rounded-md">
                        <button className="btn bg-orange-400">APPLY</button>
                        <input
                            type="text"
                            value={voucherCode}
                            onChange={handleVoucherCodeChange}
                            className="file-input file-input-bordered w-full max-w-xs pl-2" placeholder="Enter Voucher Code" />
                    </div>
                    <br />
                    <hr />

                    <div className="flex justify-between items-center p-3  mt-2 rounded-md ">
                        <p className="font-medium">Total</p>
                        <p>৳ {calculateTotalPrice()}</p>
                    </div>

                    <Link to="/cartPage/ProceedToCheckOutPage"><button onClick={() => handleProcess()} className="btn bg-orange-400 uppercase text-slate-100 mt-10 w-full"> Proceed to checkout </button></Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;