import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";


const publicRoute = [
    {
        component: Home,
        path: '/'
    },
    {
        component: About,
        path: '/about'
    },
    {
        component: Login,
        path: '/login'
    },
]

export default publicRoute