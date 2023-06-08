import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
const Navbar = () => {
  const {user,  logOut } = useContext(AuthContext);
  

  const handleLogOut = () => {
      logOut()
          .then(() => { })
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
       <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
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
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-lg font-semibold">
                Your Website
              </Link>
            </div>
            <div className="hidden md:flex">
              <div className="ml-10 flex items-center  space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link to="/register" className="text-gray-600 hover:text-gray-900">
                  Registration
                </Link>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
           {navItems}
              </div>
            </div>
            <div className="md:hidden flex">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
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
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-gray-600 hover:text-gray-900 block">
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 block"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-gray-900 block"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 block"
              >
                Contact
              </Link>
           {navItems}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
