import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"cart",
            element:<Cart/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"products",
            element:<Products/>
        },
        {
            path:"register",
            element:<Register/>
        }
    ]
  },
]);
export default router;