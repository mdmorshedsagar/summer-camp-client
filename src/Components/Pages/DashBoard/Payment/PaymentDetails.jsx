import usePayment from "../../../Hooks/usePayment";


const PaymentDetails = () => {
    const [paymentDetails]=usePayment();
    return (
        <div className="w-full">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Payment details: {paymentDetails.length}</h3>
        </div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sports name</th>
                        <th>transactionId</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentDetails.length > 0 ? (
                        paymentDetails.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                               
                                <td>{item.itemNames}</td>
                               
                                <td className="text-start">{item.transactionId}</td>
                               
                                <td className="text-start">{item.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No items found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentDetails;