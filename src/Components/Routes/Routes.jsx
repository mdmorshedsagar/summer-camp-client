import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layouts/DashBoard";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddClasses from "../Pages/DashBoard/addClasses";
import ManageClasses from "../Pages/DashBoard/ManageClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main> ,
       
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element: <Register></Register>
          },
          {
            path:'/allClasses',
            element:<PrivateRoutes><AllClasses></AllClasses></PrivateRoutes>
          },
          {
            path:'/allInstructor',
            element:<PrivateRoutes><AllInstructor></AllInstructor></PrivateRoutes>
          }
        ],
      },
      {
        path:"dashboard",
        element:<DashBoard></DashBoard>,
        children:[
          {
            path: 'allUsers', 
            element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
          },
          {
            path: 'addClasses', 
            element:<AddClasses></AddClasses>
          },
          {
            path: 'manageClasses', 
            element:<AdminRoutes> <ManageClasses></ManageClasses></AdminRoutes>
          },
        ]
      }
   
]);

export default router;