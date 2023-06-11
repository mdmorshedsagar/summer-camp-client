// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ManageClasses = () => {
    const [classes, setClasses] = useState([]);

  useEffect(() => {
      fetchClasses()
  }, []);

  const fetchClasses = () => {
    axios
      .get('http://localhost:5000/classes/pending')
      .then((response) => {
        setClasses(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleApprove = (classId) => {
    updateClassStatus(classId, 'approved');
  };

  const handleDeny = (classId) => {
    updateClassStatus(classId, 'denied');
  };

  const updateClassStatus = (classId, status) => {
    axios
      .put(`http://localhost:5000/classes/${classId}/status`, { status })
      .then((response) => {
        console.log(response.data.message);
        fetchClasses();
      })
      .catch((error) => {
        console.error(error);
      });
  };

//   const handleSendFeedback = (classId) => {
//     // Open modal or navigate to another page for sending feedback
//   };
    return (
        <div className="w-full m-4">
      <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>
      {classes.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Class Image</th>
              <th className="py-2 px-4 border-b">Class Name</th>
              <th className="py-2 px-4 border-b">Instructor Name</th>
              <th className="py-2 px-4 border-b">Available Seats</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="py-2 px-4 border-b"> <img src={classItem.imageURL} /> </td>
                <td className="py-2 px-4 border-b">{classItem.sports_name}</td>
                <td className="py-2 px-4 border-b">{classItem.instructorName}</td>
                <td className="py-2 px-4 border-b">{classItem.availableSeats}</td>
                <td className="py-2 px-4 border-b">{classItem.price}</td>
                <td className="py-2 px-4 border-b">{classItem.status}</td>
                <td className="py-2 px-4 border-b">{classItem.status === 'pending' && (
  <>
    <button
      className="bg-green-500 text-white py-1 px-2 rounded disabled:opacity-50"
      onClick={() => handleApprove(classItem._id)}
      disabled={classItem.status !== 'pending'}
    >
      Approve
    </button>
    <button
  className="bg-red-500 text-white py-1 px-2 rounded disabled:opacity-50"
  onClick={() => handleDeny(classItem._id)}
  disabled={classItem.status !== 'pending'}
>
  Deny
</button>
{/* <button
  className="bg-blue-500 text-white py-1 px-2 rounded"
  onClick={() => handleSendFeedback(classItem._id)}
>
  Send Feedback
</button> */}
</>
)}
</td>
</tr>
))}
</tbody>
</table>
) : (
<p>No classes found.</p>
)}
</div>
);
};

export default ManageClasses;
