import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular_classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"Popular Classes"}
        subHeading={"Various popular sports classes card"}
      />

      <div className="class-card-container grid md:grid-cols-3 gap-6 m-4">
        {classes.map((classData) => (
           <div className="card  rounded-xl border border-spacing-2 " key={classData._id}>
      <div className="card-body bg-slate-50">
       <img src={classData.imageURL} className="h-[180px] " />
        <p className="card-text">Sport: {classData.name}</p>
        <p className="card-text">description: {classData.description}</p>
        <p className="card-text">Student: {classData.studentsCount}</p>
        
      </div>
    </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
