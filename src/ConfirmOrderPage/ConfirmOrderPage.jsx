import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ConfirmOrderPage = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axiosSecure.get(`/confirmOrder?email=${user?.email}`);
                setData(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user?.email]);

    console.log(data)


    return (
        <div className="w-full">
            {
                data?.map((singleData, index) => <div key={index} className="lg:w-[80%] mx-auto flex justify-between items-center gap-3 mt-5 border p-5 rounded-md shadow-md">

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
                    <button className="text-red-500">Cancel Order</button>

                </div>)
            }
        </div>
    );
};

export default ConfirmOrderPage;