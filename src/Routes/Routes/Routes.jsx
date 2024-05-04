import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement: 
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
])

export default router;