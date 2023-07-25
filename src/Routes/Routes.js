import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";
import DonorForm from "../components/Home/BeDonor/DonorForm/DonorForm";
import Donor from "../components/Home/Donor/Donor";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import ApproveDonor from "../components/Dashboard/ApproveDonor/ApproveDonor";
import AddBlog from "../components/Dashboard/AddBlog/AddBlog";
import AddReview from "../components/Dashboard/AddReview/AddReview";
import BlogDetails from "../components/Blog/BlogDetails/BlogDetails";
import Contact from "../components/Contact/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import Payment from "../components/Payment/Payment";
import PaymentUser from "../components/Dashboard/PaymentUser/PaymentUser";


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
                path:'/donorform',
                element:<PrivateRoute><DonorForm></DonorForm></PrivateRoute>
            },
            {
                path:'/donor',
                element:<PrivateRoute><Donor></Donor></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
            path:'/blogdetails/:id',
            element:<BlogDetails></BlogDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/payment',
                element:<Payment></Payment>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
                children:[
                    {
                    path:'/dashboard/donor',
                    element:<ApproveDonor></ApproveDonor>
                    },
                    {
                        path:'/dashboard/addblog',
                        element:<AddBlog></AddBlog>
                    },
                    {
                        path:'/dashboard/addreview',
                        element:<AddReview></AddReview>
                    },
                    {
                        path:'/dashboard/paymentuser',
                        element:<PaymentUser></PaymentUser>
                    }
                ]
            }
        ]
    }
]);
export default router;