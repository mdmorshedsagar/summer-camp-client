import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";


const PopularInstructor = () => {
    const [instructors, serInstructor] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-school-server-self.vercel.app/popular_instructor")
      .then((res) => res.json())
      .then((data) => serInstructor(data));
  }, []);

    return (
        <div>
             <SectionTitle heading={"Popular Instructor"} subHeading={"The popular instructor has working in popular sports class"} >
             </SectionTitle>
             <div className="class-card-container grid md:grid-cols-3  m-4">
        {instructors.map((instructorData) => (
           <div className="card  rounded-xl border border-spacing-2 " key={instructorData._id}>
      <div className="card-body bg-slate-50">
       <img src={instructorData.photoURL} className="h-[180px] " />
        <p className="card-text">name: {instructorData.instructorName}</p>
      </div>
    </div>
        ))}
      </div>

        </div>
    );
};

export default PopularInstructor;