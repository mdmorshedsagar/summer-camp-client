// import React from 'react';

// eslint-disable-next-line react/prop-types
const ClassesCard = ({classObj}) => {
    // eslint-disable-next-line react/prop-types
    const {name,description,imageURL,instructorName,availableSeats,price}= classObj;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={imageURL} alt="sports pic" className="h-[260px]" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sports name:{name}</h2>
    <h1 className="card-title">Instructor: {instructorName}</h1>

    <p>description:{description}</p>
    <p>Available sites: {availableSeats}</p>
    <div className="card-actions justify-between items-center">
        <button className="badge badge-outline font-bold py-1 px-2">Price: ${price}</button>
      <button className="btn btn-primary">Enroll now </button>
    </div>
  </div>
</div>
    );
};

export default ClassesCard;