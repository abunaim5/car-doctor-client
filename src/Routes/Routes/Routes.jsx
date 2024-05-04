import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
            }
        ]
    }
])

export default router;