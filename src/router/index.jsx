import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() => import("../pages/Main.page"));
const ProductsPage = lazy(() => import("../pages/Products.page"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetail.page"));
const ProfilePage = lazy(() => import("../pages/Profile.page"));
const CartPage = lazy(() => import("../pages/Cart.page"));
const ErrorPage = lazy(() => import("../pages/Error.page"));

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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
