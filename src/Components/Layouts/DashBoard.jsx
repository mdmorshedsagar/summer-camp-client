import { Link, Outlet } from "react-router-dom"
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor]=useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
                <Link to="/">Home</Link>
              </li>
              <hr className="p-2 divider divide-gray-100"/>  
          {isAdmin &&(
            <>
              <li>
                <Link to="/dashboard/allUsers">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageClasses">Manage classes</Link>
              </li>
             
            </>
          ) }{ isInstructor && (
            <>
            <li>
              <Link to="/dashboard/instructorClass">Instructor  classes</Link>
            </li>
            <li>
              <Link to="/dashboard/addClasses">Add classes</Link>
            </li>
            </>
          )}
          <hr className="p-2 divider divide-gray-100"/>
           <li> <Link to="/dashboard/mycart"> My Cart
             </Link>  </li>
           <li> <Link to="/dashboard/paymentDetails"> Payment Details
             </Link>  </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
