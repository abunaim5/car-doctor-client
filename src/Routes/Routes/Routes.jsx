import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Bookings from "../../Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement: 
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-doctor-server-one-delta.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default router;