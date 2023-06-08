import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/register_img.json";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser,updateProfileUser } = useContext(AuthContext);
  const onSubmit = data => {

    createUser(data.email, data.password)
    .then(result => {

      const loggedUser = result.user;
      console.log(loggedUser);

      updateProfileUser(data.name, data.photoURL)
          .then(() => {
        
                          Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'User created successfully.',
                              showConfirmButton: false,
                              timer: 1500
                          });
                          reset();
                          Navigate('/');          
          })
          .catch(error => console.log(error))
  })
        .catch(error => console.log(error))
};
  return (
    <div className="md:grid md:grid-cols-2 gap-4 m-4">
      <div>
       
      <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-slate-200 rounded-xl">
      <h1 className="text-center text-2xl font-bold text-white bg-blue-200 py-2">Registration From</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            {...register("photoURL", { required: true })}
            placeholder="Photo URL"
            className="input input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-600">Photo URL is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
          validate: {
            hasCapitalLetter: (value) => /[A-Z]/.test(value),
            hasSpecialCharacter: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
          },
        })}
        placeholder="Password"
        className="input input-bordered"
      />
      {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required</p>
      )}
      {errors.password?.type === "minLength" && (
        <p className="text-red-600">Password must be at least 6 characters</p>
      )}
      {errors.password?.type === "hasCapitalLetter" && (
        <p className="text-red-600">Password must contain at least one capital letter</p>
      )}
      {errors.password?.type === "hasSpecialCharacter" && (
        <p className="text-red-600">Password must contain at least one special character</p>
      )}
          
          <p className="text-xl">Your Already have an account, please <Link className="text-orange-500" to="/login">Login</Link></p>
          
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Registrater Now" />
        </div>
      </form>
      </div>
      <div>
     
      <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>

    </div>
  );
};

export default Register;
