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
import MyCart from "../Pages/DashBoard/MyCart";
import Payment from "../Pages/DashBoard/Payment/Payment";

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
          {
            path: 'myCart', 
            element:<MyCart></MyCart>
          },
          {
            path: 'payment/:id', 
            element:<Payment></Payment>,
            loader: ({params}) => fetch(`http://localhost:5000/carts/${params.id}`)
          }
        ]
      }
   
]);

export default router;