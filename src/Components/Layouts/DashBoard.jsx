import { Link, Outlet } from "react-router-dom"
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const isInstructor=true;

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
          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/allUsers">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageClasses">Manage classes</Link>
              </li>
            </>
          )}
          {isInstructor && (
            <li>
              <Link to="/dashboard/addClasses">Add classes</Link>
            </li>
          )}
           <li>
                                <Link to="/dashboard/mycart"> My Cart
                                </Link>

                            </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
