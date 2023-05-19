import Home from "../pages/Home";
import Products from "../pages/Products";
import BasketPage from "../pages/BasketPage"
import Login  from "../pages/Login";
import SignUp from "../pages/SignUp";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/basket-page',
        element: <BasketPage />
    },
    {
        path: '/sign-in',
        element: <Login />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    }
]