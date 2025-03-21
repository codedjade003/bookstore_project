import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import BlogPost from "../components/BlogPost";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Licensing from "../components/Licensing";
import Contact from "../components/Contact";
import Terms from "../components/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: "/blog/:id",
                element: <BlogPost/>
            },
            {
                path: '/book/:id',
                element: <SingleBook/>,
                loader: ({params}) => fetch(`https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks/>
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBook/>,
                loader: ({params}) => fetch(`https://humble-trout-jx944rvwrr7hq5x4-5000.app.github.dev/book/${params.id}`)
            }
        ]
    },
    {
        path: "sign-up",
        element: <SignUp/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "logout",
        element: <Logout/>
    },
    { path: "/contact", element: <Contact /> }, // New route
    { path: "/terms", element: <Terms /> }, // New route
    { path: "/privacy-policy", element: <PrivacyPolicy /> }, // New route
    { path: "/licensing", element: <Licensing /> } // New route

]);

export default router;