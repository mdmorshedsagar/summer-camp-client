// import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const AddClasses = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = (data) => {
    const {
      sports_name,
      imageURL,
      instructorName,
      email,
      Total_seats,
      price,
      photoURL,
      availableSeats,
      description,
    } = data;
    const newClass = {
      sports_name,
      imageURL,
      instructorName,
      photoURL,
      email,
      Total_seats: parseInt(Total_seats),
      availableSeats: parseInt(availableSeats),
      price: parseFloat(price),
      description,
      status: "pending",
    };

    axiosSecure.post("/addClass", newClass).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Item added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-full m-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Sports_name</span>
          </label>
          <input
            type="text"
            placeholder="Sports Name"
            {...register("sports_name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">imageURL</span>
          </label>
          <input
            type="text"
            {...register("imageURL", { required: true })}
            placeholder="imageURL"
            className="input input-bordered w-full "
          />
        </div>
        <div className="grid md:grid-cols-2 gap-2 my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">instructorName</span>
            </label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              defaultValue={user?.displayName}
              placeholder="instructorName"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor photo</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              defaultValue={user?.photoURL}
              placeholder="instructor photo"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price "
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Total_seats</span>
            </label>
            <input
              type="number"
              {...register("Total_seats", { required: true })}
              placeholder="Total_seats"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">availableSeats</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="availableSeats"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="description"
          ></textarea>
        </div>

        <input
          className="btn bg-orange-400 font-bold mt-4"
          type="submit"
          value="Add Classes"
        />
      </form>
    </div>
  );
};

export default AddClasses;
