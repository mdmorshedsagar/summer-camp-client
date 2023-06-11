import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import logo from "../../assets/logo.webp";
const Navbar = () => {
  const {user,  logOut } = useContext(AuthContext);
  

  const handleLogOut = () => {
      logOut()
          .then(() => {})
          .catch(error => console.log(error));
  }
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navItems = <>
      {
            user ? <>
                 <div className="flex items-center">
                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar relative mx-2">
  <div className="w-10 rounded-full">
  <img src={user?.photoURL} title={user?.displayName} />
  </div>
</label>
      <Link to="">
      <button onClick={handleLogOut} className="btn btn-outline hover:btn-ghost normal-case text-xl font-bold">Log Out</button>
      </Link>
       </div>
            </> : <>
            <button className="btn btn-outline hover:btn-ghost normal-case text-xl font-bold"><Link to="/login">Login</Link></button>
                
            </>
        }

     
  </>

  return (
    <div className="fixed top-0 left-0 w-full  bg-white shadow-md z-50">
    <nav className="container mx-auto  max-w-screen-xl px-4 md:py-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-[100px] md:w-[180px] h-auto"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="ml-10 flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/allClasses"
              className="text-gray-600 hover:text-gray-900"
            >
              All Classes
            </Link>
            <Link
              to="/allInstructor"
              className="text-gray-600 hover:text-gray-900"
            >
              All Instructor
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              DashBoard
            </Link>
            
            {navItems}
          </div>
        </div>
        <div className="md:hidden flex">
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  {isMobileMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-900 block"
        >
          Home
        </Link>
        <Link
          to="/allClasses"
          className="text-gray-600 hover:text-gray-900 block"
        >
          All Classes
        </Link>
        <Link
              to="/allInstructor"
              className="text-gray-600 hover:text-gray-900"
            >
              All Instructor
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              DashBoard
            </Link>
        
        {navItems}
      </div>
    </div>
  )}
</div>

  );
};

export default Navbar;
