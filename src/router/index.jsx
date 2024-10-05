import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error.page";
import MainPage from "../pages/Main.page";
import ProductsPage from "../pages/Products.page";
import ProductDetailPage from "../pages/ProductDetail.page";
import ProfilePage from "../pages/Profile.page";
import CartPage from "../pages/Cart.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
