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
import AddClasses from "../Pages/DashBoard/addClasses";
import ManageClasses from "../Pages/DashBoard/ManageClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import MyCart from "../Pages/DashBoard/MyCart";
import Payment from "../Pages/DashBoard/Payment/Payment";
import MyClass from "../Pages/DashBoard/MyClass";
import PaymentDetails from "../Pages/DashBoard/Payment/PaymentDetails";
import ErrorPage from "../ErrorPage";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main> ,
        errorElement:<ErrorPage></ErrorPage>,
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
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path: 'allUsers', 
            element:<AllUsers></AllUsers>
          },
           {
            path: 'manageClasses', 
            element: <ManageClasses></ManageClasses>
          },
          {
            path: 'addClasses', 
            element:<AddClasses></AddClasses>
          },
          {
            path: 'instructorClass', 
            element:<MyClass></MyClass>
          },
          {
            path: 'myCart', 
            element:<MyCart></MyCart>
          },
          {
            path: 'paymentDetails', 
            element:<PaymentDetails></PaymentDetails>
          },
          {
            path: 'payment/:id', 
            element:<Payment></Payment>,
            loader: ({params}) => fetch(`https://summer-camp-school-server-self.vercel.app/carts/${params.id}`)
          }
        ]
      }
   
]);

export default router;