import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CustomService from "../Pages/CustomService/CustomService";
import Terms from "../Pages/Terms&Condition/Terms";
import Venue from "../Pages/Venue/Venue";
import UpcomingEvent from "../Pages/UpcomingEvent/UpcomingEvent";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/customService',
                element: <PrivateRoute><CustomService></CustomService></PrivateRoute>
            },
            {
                path: '/venue',
                element: <PrivateRoute><Venue></Venue></PrivateRoute>,
                loader: () => fetch('/venu.json')
            },
            {
                path: '/upcomingEvent',
                element: <PrivateRoute><UpcomingEvent></UpcomingEvent></PrivateRoute>
            }
        ]
    }
])


export default Route;