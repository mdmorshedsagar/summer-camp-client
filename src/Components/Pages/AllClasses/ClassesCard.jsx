import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ClassesCard = ({ classObj }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, sports_name, description, imageURL, instructorName, availableSeats, price } = classObj;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
 

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = (classObj) => {
    if (user && user.email) {


      const cartItem = { menuItemId: _id, sports_name, imageURL, price, email: user.email };
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Food added on the cart.',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch(error => {
       
          console.error('Error:', error);
        });

      localStorage.setItem('buttonDisabled', true);
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

 

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imageURL} alt="sports pic" className="h-[260px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Sports name: {sports_name}</h2>
        <h1 className="card-title">Instructor: {instructorName}</h1>
        <p>description: {description}</p>
        <p>Available sites: {availableSeats}</p>
        <div className="card-actions justify-between items-center">
          <button className="badge badge-outline font-bold py-1 px-2">Price: ${price}</button>
          <button onClick={() => handleAddToCart(classObj)} className="btn btn-primary">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
