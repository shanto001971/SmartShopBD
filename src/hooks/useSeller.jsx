import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useSeller = (email) => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isSeller, isLoading: isSellerLoading } = useQuery({
        queryKey: ['isSeller', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/seller/${user?.email}`);
                return res.data.seller;
            } catch (error) {
                console.error('Error checking seller status:', error);
                throw error;
            }
        }
    });

    return [isSeller, isSellerLoading];
};

export default useSeller;
