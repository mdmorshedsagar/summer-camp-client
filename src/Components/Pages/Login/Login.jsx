import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/login_img.json";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Login = () => {
  const { LoginUser } = useContext(AuthContext);
   const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
    
       
        LoginUser(data.email, data.password)
         .then(() => {
        
          Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'User created successfully.',
              showConfirmButton: false,
              timer: 1500
          });
          reset();
          navigate(from, { replace: true });
                   
})
.catch(error => console.log(error))
      };
    return (
        <div className="md:flex gap-4 items-center md:m-8 mt-16">
            <div className="md:w-1/2">
            <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
 <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-100 py-16 rounded-xl md:mx-6 md:px-4 md:w-1/2"> 
   <h1 className="text-3xl font-bold text-gray-400 text-center">Login Form</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          id="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password:
        </label>
        <input
          type="password"
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
          id="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">{errors.password.message}</p>
        )}
      </div>
      
      <p className="text-xl mb-2">If you new , please <Link className="text-orange-500" to="/register">Registration</Link></p>
      <div>
      <input  className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-xl font-bold cursor-pointer" type="submit" value="Login now" />
       
      </div>
      <GoogleLogin></GoogleLogin>
    </form>
    
        </div>
       
    );
};

export default Login;