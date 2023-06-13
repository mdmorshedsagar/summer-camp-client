
import useClass from "../../Hooks/useClass";


const MyClass = () => {
    
  const [instructorClass]=useClass();

    return (
        <div className="w-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Instractor Classes: {instructorClass.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sports image</th>
                            <th>Sports Name</th>
                            <th>price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructorClass.length > 0 ? (
                            instructorClass.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.imageURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.sports_name}</td>
                                    <td className="text-start">{item.price}</td>
                                    <td className="text-start">{item.status}</td>
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

export default MyClass;
