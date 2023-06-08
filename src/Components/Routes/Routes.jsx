import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";

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
          }
        ],
      },
   
]);

export default router;