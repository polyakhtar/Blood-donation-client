import Register from "../../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layouts/Main");
const { default: About } = require("../../Pages/About/About");
const { default: Home } = require("../../Pages/Home/Home");
const { default: Login } = require("../../Pages/Login/Login");
const { default: Orders } = require("../../Pages/Orders/Orders");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/orders',
                element:<Orders></Orders>
            },
            {
                path:'/About',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
            path:'/signup',
            element:<Register></Register>
        }
        ]
    }
])
export default router;