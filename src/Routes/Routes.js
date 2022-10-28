import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Error from "../components/Error/Error";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learning-platform-server-synysterrudro.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/course-details',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-platform-server-synysterrudro.vercel.app/courses/${params.id}`)
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>

    }
]);