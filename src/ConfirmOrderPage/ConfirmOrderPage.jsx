import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

const ConfirmOrderPage = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: currentOrder = [] } = useQuery({
        queryKey: ['currentOrder', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/confirmOrder?email=${user?.email}`,{
                method:'GET',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return response.json();
        },
    });


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

                        emailjs.send(`${import.meta.env.VITE_SERVICE}`, `${import.meta.env.VITE_TAMPALTEId}`, templateParams, `${import.meta.env.VITE_PUBLIC_KEY}`)
                            .then(() => {
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
        <div className="">
            {
                currentOrder.length > 0 ? (<div className="w-full">
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
                </div>) :
                    (
                        <div className="h-screen flex justify-center items-center">
                            <div className="bg-slate-200  rounded-full ">
                                <img className="rounded-full" src="https://mir-s3-cdn-cf.behance.net/projects/404/8412d0104101523.Y3JvcCwxMDI0LDgwMCwwLDcw.jpg" alt="" />
                                <h1 className="mt-5 lg:text-5xl text-2xl text-center">No Order found</h1>
                            </div>
                        </div>
                    )
            }


        </div>
    );
};

export default ConfirmOrderPage;