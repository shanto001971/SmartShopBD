import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
    const [axiosSecure] = useAxiosSecure();
    const userId = localStorage.getItem('userId');
    // console.log(userId)

    const { data: sellerData, isLoading: isSellerLoading, refetch } = useQuery({
        queryKey: ['isSeller', userId], // Fix queryKey
        enabled: !!userId, // Fix enabled
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/seller/${userId}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('sellerToken')}`
                    }
                });
                return res.data;
            } catch (error) {
                console.error('Error checking seller status:', error);
                throw error;
            }
        }
    });

    // refetch()

    return [sellerData, isSellerLoading, refetch];
};

export default useSeller;
