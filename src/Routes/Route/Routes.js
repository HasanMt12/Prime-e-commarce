import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../pages/Layouts/Main";
import StartPage from "../../pages/StartPage/StartPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <StartPage></StartPage>
            },
           
           
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <PrivateRouts> <DashboardLayout></DashboardLayout> </PrivateRouts>,
    //     children:[
           
    //     ]
    // }
])

export default router;