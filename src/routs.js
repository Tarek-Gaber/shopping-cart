// node imports
import {
    createBrowserRouter,
} from "react-router-dom";

// components imports
import Home from "./pages/Home/Home";
import Success from "./pages/Success/Success";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/success",
      element: <Success />,
    },
]);

export default router