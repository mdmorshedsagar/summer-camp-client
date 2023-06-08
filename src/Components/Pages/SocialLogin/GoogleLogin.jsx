
import { FaGooglePlusG } from "react-icons/fa";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const GoogleLogin = () => {
    const { googleSign } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSign = () => {
        googleSign()
            .then((result) => {
                console.log(result)
               navigate(from, { replace: true }); 
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <hr  className="divider"/>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSign} className="btn btn-outline hover:bg-blue-500">
                    <FaGooglePlusG className="text-2xl font-bold"></FaGooglePlusG> Google Sign
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;