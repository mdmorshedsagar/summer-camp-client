// import React from 'react';

import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
      // Fetch the data from the API or JSON file
      fetch('http://localhost:5000/allClasses')
        .then((res) => res.json())
        .then((data) => setClasses(data))
        
    }, []);
    return (
    <div className="mt-28">
        <div className="grid md: grid-cols-3 md:gap-6 mx-4 ">
      {classes.map((classObj) => (
        <ClassesCard key={classObj._id} classObj={classObj} />
      ))}
    </div>   
    </div>
);
};

export default AllClasses;