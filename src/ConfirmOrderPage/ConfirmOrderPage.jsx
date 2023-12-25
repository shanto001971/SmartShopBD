import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

const ConfirmOrderPage = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await axiosSecure.get(`/confirmOrder?email=${user?.email}`);
    //             setData(result.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, [user?.email]);

    const { refetch, data: currentOrder = [] } = useQuery({
        queryKey: ['currentOrder', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`https://smart-shop-bd-server-side.vercel.app/confirmOrder?email=${user?.email}`);
            return response.json();
        },
    });

    console.log(currentOrder);

    // const cancelOrderMutation = useMutation(
    //     (productsId) => axiosSecure.delete(`/cancelOrder/${productsId}`),

    // );

    const handleCancelOrder = async (productsId) => {

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

                    const sendEmail = () => {
                        const templateParams = {
                            user_name: user?.displayName,
                            user_email: user?.email,
                            message: "Your order has been Cancel",
                        };

                        emailjs.send(`${import.meta.env.VITE_SERVICE}`, `${import.meta.env.VITE_TAMPALTE}`, templateParams, `${import.meta.env.VITE_PUBLIC_KEY}`)
                            .then((result) => {

                            })
                            .catch((error) => {
                                console.log(error.text);
                            });
                    };



                    const result = await axiosSecure.delete(`/cancelOrder/${productsId}`);
                    if (result.data.message == "Order cancelled successfully") {
                        toast.success('Delete Success');
                        sendEmail()
                    } else {
                        toast.error("Try Again")
                    }
                    refetch();
                }

            });
            // Handle the result or update the UI accordingly
        } catch (error) {
            console.error("Error cancelling order:", error);
            // Handle the error or show an error message
        }
    };


    return (
        <div className="w-full">
            <Toaster />
            {
                currentOrder?.map((singleData, index) => <div key={index} className="lg:w-[80%] mx-auto flex justify-between items-center gap-3 mt-5 border p-5 rounded-md shadow-md">

                    <div className="flex items-center gap-3">
                        <img className="lg:h-40 lg:w-40 h-20 w-20 rounded-lg" src={singleData?.productsImage} alt="" />
                        <div className="">
                            <h1 className="lg:text-lg">{singleData?.productTitle.slice(0, 40)}...</h1>
                            <small className="badge-sm bg-slate-200 rounded-xl">Shop Name: {singleData?.shopName}</small>
                            <p className="badge-sm">ProductsId: {singleData?.productsId}</p>
                            <p className="badge-sm">Category: {singleData?.category}</p>
                            <p className="badge-sm">Quantity: ({singleData?.quantity})</p>
                        </div>
                    </div>
                    <button onClick={() => handleCancelOrder(singleData?.productsId)} className="text-red-500">Cancel Order</button>

                </div>)
            }
        </div>
    );
};

export default ConfirmOrderPage;