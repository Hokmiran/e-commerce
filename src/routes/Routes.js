import Home from "../pages/Home";
import Products from "../pages/Products";
import BasketPage from "../pages/BasketPage"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Admin from "../pages/Admin";
import AuthLogin from "../components/AuthLogin";
import EditProduct from "../pages/EditProduct";
import AddProduct from "../pages/AddProduct";
import OrdersPage from "../pages/OrdersPage"

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
    },
    {
        path: '/add-product',
        element: <AddProduct />
    },
    {
        path: '/orders',
        element: 
        <AuthLogin>
            <OrdersPage />
        </AuthLogin>
    },
    {
        path: '/edit/:id',
        element: <EditProduct />
    },
    {
        path: '/admin',
        element:
            <AuthLogin>
                <Admin />
            </AuthLogin>
    },
]