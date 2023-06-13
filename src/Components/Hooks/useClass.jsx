import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: instructorClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/instructorClass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [instructorClass, refetch]
};

export default useClass;