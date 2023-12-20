import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const CartPage = () => {
    // const { setCheckOutId } = useContext(AuthContext)
    const [cart, refetch] = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const [voucherCode, setVoucherCode] = useState("");
    const [shippingFee, setShippingFee] = useState(69);
    const [axiosSecure] = useAxiosSecure();
    const [selectedProduct, setSelectedProduct] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    // console.log(user)
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

    // console.log(selectedItems)

    const handleSingleItemDelete = async (productId) => {
        try {


            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const result = await axiosSecure.delete(`/cart/${productId}`);
                    if (result.statusText == "OK" || result.status == 200) {
                        toast.success('Delete Success');
                    } else {
                        toast.error("Try Again")
                    }
                    refetch();
                }
            });

            // Assuming refetch is a function to refresh the cart data
        } catch (error) {
            console.error("Error deleting single item:", error);
        }
    };

    // console.log(selectedItems)

    const handleDeleteAll = async () => {
        try {
            const data = { productIds: selectedItems };

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const result = await axiosSecure.delete(`/carts`, { data });
                    if (result.data.deletedCount > 0) {
                        toast.success(`Delete Success (${result.data.deletedCount}) items`);
                    } else {
                        toast.error("Try Again")
                    }
                    setSelectedItems([]);
                    // Assuming refetch is a function to refresh the cart data
                    refetch();
                }
            });


        } catch (error) {
            console.error("Error deleting all items:", error);
        }
    };

    const handleProcess = async (productsData) => {
        try {

            const itemIndex = selectedProduct.indexOf(productsData);

            if (itemIndex === -1) {
                setSelectedProduct([...selectedProduct, productsData]);
            } else {
                const updatedItems = [...selectedProduct];
                updatedItems.splice(itemIndex, 1);
                setSelectedProduct(updatedItems);

            }
        } catch (error) {
            console.error('Error during Axios request:', error);
        }
    };
    // console.log(selectedProduct)


    const handelProcessOrder = async () => {

        const sendEmail = () => {
            const templateParams = {
                user_name: user?.displayName,
                user_email: user?.email,
                message: "Your order has been placed",
            };

            emailjs.send(`${import.meta.env.VITE_SERVICE}`, `${import.meta.env.VITE_TAMPALTE}`, templateParams, `${import.meta.env.VITE_PUBLIC_KEY}`)
                .then((result) => {
                    console.log(result.text);
                    if (result.text == "OK") {
                        toast.success('Order Confirm')
                        navigate("/ConfirmOrderPage")
                    } else {
                        toast.error("Try Again")
                    }
                })
                .catch((error) => {
                    console.log(error.text);
                });
        };




        try {

            // Prepare the data to be sent to the server
            const data = { product: selectedProduct };

            // Make a POST request to the server
            const result = await axiosSecure.post(`/proceedToCheckOut`, data);
            if (result.data.acknowledged == true || result.data.insertedCount > 0) {
                sendEmail()
            }
            // Handle the result as needed
            console.log(result);

        } catch (error) {
            console.error('Error during Axios request:', error);
        }

    }

    return (
        <div className="w-full mt-5 px-5 lg:px-0">
            <Toaster />
            <div className="lg:flex w-full lg:px-20">
                <div className="lg:w-[80%] lg:mr-20 ">
                    <div className=" flex items-center justify-between border lg:p-2  rounded-md p-5 ">
                        <h1 className="flex items-center gap-3 font-medium">
                            <input
                                type="checkbox"
                                checked={selectedItems.length === cart.length}
                                onChange={() => {
                                    setSelectedItems(
                                        selectedItems.length === cart.length
                                            ? []
                                            : cart.map((item) => item._id)
                                    );
                                    setSelectedProduct(
                                        selectedProduct.length === cart.length
                                            ? []
                                            : cart.map((item) => item)
                                    )
                                }}
                                className="checkbox checkbox-xs" />
                            SELECT ALL ({selectedItems.length}) ITEMS
                        </h1>
                        <button

                            onClick={handleDeleteAll}
                            className="flex items-center gap-2 cursor-pointer text-red-500 mr-5 lg:mr-0"
                            disabled={selectedItems.length === 0}>
                            <RiDeleteBin6Line />
                            Delete
                        </button>
                    </div>


                    <div className="mt-8 lg:shadow-2xl">
                        <div className="border lg:px-3 rounded-lg lg:shadow-xl px-4">
                            <h1 className="flex items-center gap-3 mt-4 font-medium">
                                All Items
                            </h1>
                            <p className="text-end mb-2 text-xs"> Earliest Delivery:20 Dec</p>
                        </div>
                        <br />
                        <hr />

                        <div className="">
                            {
                                cart?.map(singleData => <div key={singleData._id} className="mt-1 lg:shadow-xl p-5 lg:p-10 rounded-md relative">
                                    <input type="checkbox"
                                        checked={selectedItems.includes(singleData._id)}
                                        onChange={() => {
                                            handleCheckboxChange(singleData._id)
                                            handleProcess(singleData)
                                        }}
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

                                    <div className=" lg:flex justify-around gap-5 items-center lg:p-5 rounded-md">
                                        <div className="">
                                            <h3 className="flex gap-4 lg:w-52">
                                                <small className="flex items-center gap-2 p-1 rounded-md">
                                                    <del>{singleData?.oldPrice}</del>
                                                    {singleData?.discounts}% off
                                                </small>
                                                ৳ {singleData?.newPrice}
                                            </h3>
                                        </div>
                                        <div className=" border  p-[5px] flex w-32 my-3 lg:my-0">
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
                <div className="lg:w-[40%] border lg:p-5 my-10 lg:my-0 px-5 lg:px-0">
                    <h1 className="font-medium">Order Summary</h1>
                    <div className="flex justify-between items-center p-3  mt-2 rounded-md ">
                        <small>Subtotal (1 items)</small>
                        <small>৳ {calculateSubtotal().toFixed(2)} <span className="">Taka</span></small>
                    </div>

                    <div className="flex justify-between items-center p-3  mt-2 rounded-md ">
                        <small>Shipping Fee</small>
                        <small>৳ {shippingFee} <span>Taka</span></small>
                    </div>

                    <div className="flex items-center mt-2 border rounded-md">
                        <button className="btn bg-orange-400">APPLY</button>
                        <input
                            type="text"
                            value={voucherCode}
                            onChange={handleVoucherCodeChange}
                            className="file-input w-full max-w-xs pl-2" placeholder="Enter Voucher Code" />
                    </div>
                    <br />
                    <hr />

                    <div className="flex justify-between items-center p-3  mt-2 rounded-md ">
                        <p className="font-medium">Total</p>
                        <p>৳ {calculateTotalPrice().toFixed(2)} <span>Taka</span></p>
                    </div>

                    <Link ><button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn bg-orange-400 uppercase text-slate-100 mt-10 w-full"> Proceed to checkout </button></Link>
                </div>
            </div>



            <dialog id="my_modal_3" className="modal">
                <div className="modal-box relative">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0">✕</button>
                    </form>

                    <div className="mt-5 ">
                        <div className="lg:grid grid-cols-2 gap-2">
                            <div className="border border-sky-400 p-3 rounded-md flex gap-2 items-center lg:shadow-2xl">
                                <img className="h-10 w-10" src="https://www.vhv.rs/dpng/d/601-6012125_hand-cash-circular-symbol-cash-logo-black-and.png" alt="" />
                                <h3 className="font-medium">Cash On Delivery</h3>
                            </div>
                            <div className="border border-sky-400 p-3 rounded-md lg:shadow-2xl mt-3 lg:mt-0">
                                <img className="h-10 w-16" src="https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png" alt="" />
                                <h3 className="font-medium">Bkash Payment</h3>
                            </div>
                            
                        </div>

                        <div className="mt-5">
                            <p>Total Items: ({selectedItems.length}) </p>
                            <p><span className="font-medium">Total</span> ৳ {calculateTotalPrice().toFixed(2)} <span>Taka</span></p>
                        </div>

                    </div>


                    <button onClick={() => handelProcessOrder()} className="btn bg-orange-400 uppercase text-slate-100 mt-10 ">Confirm Order</button>
                </div>
            </dialog>
        </div>
    );
};

export default CartPage;

