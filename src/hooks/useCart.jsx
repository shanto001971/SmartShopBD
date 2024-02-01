import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        //     return response.json()
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`,{
                method:'GET',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data;
        },

    })
    // console.log(cart)
    refetch()


    return [cart, refetch]
}