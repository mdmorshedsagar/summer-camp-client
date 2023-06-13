import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: paymentDetails = [] } = useQuery({
        queryKey: ['paymentDetails', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/paymentDetails?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [paymentDetails, refetch]
};

export default usePayment;