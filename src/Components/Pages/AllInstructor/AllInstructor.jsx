import { useEffect, useState } from "react";


const AllInstructor = () => {
    const [instructors, serInstructor] = useState([]);

    useEffect(() => {
      fetch("https://summer-camp-school-server-self.vercel.app/allInstructor")
        .then((res) => res.json())
        .then((data) => serInstructor(data));
    }, []);
    return (
        <div className="mt-28">
                  <div className="class-card-container grid md:grid-cols-3 gap-6 m-4">
        {instructors.map((instructorData) => (
           <div className="card  rounded-xl border border-spacing-2 " key={instructorData._id}>
      <div className=" m-2 text-xl bg-slate-50">
       <img src={instructorData.photoURL} className="h-[220px] w-full " />
        <p className="card-text">name: {instructorData.instructorName}</p>
        <p className="card-text">email: {instructorData.email}</p>
        <p className="card-text">sports name: {instructorData.sports_name}</p>
      </div>
    </div>
        ))}
      </div>
        </div>
    );
};

export default AllInstructor;