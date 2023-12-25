import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import OrderPage from "./OrderPage";




const PlaceOrderPage = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [filterData, setFilterData] = useState([]);
    const [obData] = filterData;
    const [deliveryFee, setDeliveryFee] = useState(69);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const res = await axiosSecure("/cardCollection");
                    const data = res.data;
                    const singleItem = data.filter(singledata => singledata?._id == id);
                    setFilterData(singleItem);
                    
                } catch (error) {
                    // Handle error
                }
            }
        };

        fetchData();
    }, [id, user]);


    // console.log(obData)





    return (
        <div className="w-full">
            <OrderPage user={user} obData={obData} filterData={filterData} deliveryFee={deliveryFee} />
        </div>
    );
};

export default PlaceOrderPage;