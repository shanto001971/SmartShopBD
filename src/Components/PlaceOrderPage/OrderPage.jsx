import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const OrderPage = ({ user, obData, filterData, deliveryFee }) => {

    const [itemsTotal, setItemsTotal] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        const newItemsTotal = filterData.reduce(
            (total, item) => total + item.newPrice,
            0
        );
        setItemsTotal(newItemsTotal);

        const newTotalPayment = newItemsTotal + deliveryFee;
        setTotalPayment(newTotalPayment);
    }, [deliveryFee, filterData])

    return (
        <div>
            <div className="lg:flex gap-5  mx-auto bg-slate-200">
                <div className="lg:w-[70%] lg:px-10 bg-slate-200 rounded-md p-5">
                    <div className="py-10 text-center bg-slate-100 rounded-md shadow-2xl">
                        <h1>+ Add New Address</h1>
                    </div>

                    <div className="py-5 lg:px-5 bg-slate-100 rounded-md lg:mt-5 shadow-2xl mb-10">
                        <small className="px-2">Deliver to: {user?.displayName}</small>
                        <div className="mt-5 lg:flex justify-around gap-5 items-center shadow-xl p-5 lg:p-10 rounded-md">
                            <div className="h-20 w-20">
                                <img src={obData?.productsImage} alt="" />
                            </div>
                            <div className="">
                                <h1>{obData?.productTitle.slice(0, 60)}</h1>
                                <small>No Brand,Color Family:White, Lens Color:White, Frame Color:White</small>
                            </div>
                            <div className="">
                                <h3 className="flex gap-4 lg:w-52">
                                    <small className="flex items-center gap-2 bg-slate-200 p-1 rounded-md">
                                        <del>{obData?.oldPrice}</del>
                                        {obData?.discounts}% off
                                    </small>
                                    ৳ {obData?.newPrice}
                                </h3>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className="p-4 border border-sky-600 lg:w-[30%] lg:mt-5 bg-slate-200 rounded-md">
                            <small>Standard Delivery | ৳69</small>
                            <br />
                            <small>Receive by 19 Dec - 23 Dec</small>
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <div className="flex justify-between items-center p-4 border lg:mt-5">
                                <div className=" flex gap-2 items-center">
                                    <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i4/O1CN01tGyTSv1JA5gQ2yaGF_!!6000000000987-2-tps-96-96.png" alt="" />
                                    <small>Store Voucher</small>
                                </div>
                                <small className="flex items-center gap-2">Get Voucher <IoIosArrowForward /></small>
                            </div>

                            <div className="">
                                <p>1 Item(s). Subtotal: ৳ {obData?.newPrice}</p>
                                <small>Saved  ৳ {obData?.oldPrice}</small>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:w-[30%] p-10  rounded-md shadow-2xl bg-slate-100">
                    <small>Discount and Payment</small>

                    <div className="flex justify-between items-center mt-5 p-4 shadow-lg">
                        <div className="flex items-center gap-1">
                            <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i4/O1CN01tGyTSv1JA5gQ2yaGF_!!6000000000987-2-tps-96-96.png" alt="" />
                            <small> Voucher</small>
                        </div>
                        <small>No Applicable Voucher</small>
                    </div>

                    <div className="flex justify-between items-center mt-5 p-4 shadow-lg">
                        <div className="flex items-center gap-1">
                            <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i3/O1CN01O0d2d41dHgZ87WWYB_!!6000000003711-2-tps-96-96.png" alt="" />
                            <small>Promo Code</small>
                        </div>
                        <small className="flex items-center gap-3">Enter Store/Daraz Code <IoIosArrowForward /></small>
                    </div>
                    <br />
                    <hr />

                    <div className="mt-3">
                        <small>Order Summary</small>
                        <div className="flex justify-between items-center mt-2">
                            <small>Items Total</small>
                            <small>৳ {itemsTotal}</small>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <small>Delivery Fee</small>
                            <small>৳ {deliveryFee}</small>
                        </div>
                        <br />
                        <hr />
                        <div className="flex justify-between items-center mt-2">
                            <small>Total Payment</small>
                            <small>৳ {totalPayment}</small>
                        </div>

                        <p className="text-right text-xs mt-2">
                            VAT included, where applicable
                        </p>
                    </div>

                    <button className="btn w-full bg-[#F85606] mt-5 text-slate-200">Place Order</button>

                </div>
            </div>
        </div>
    );
};

export default OrderPage;