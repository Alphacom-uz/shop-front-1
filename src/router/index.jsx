import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/Products.page";
import ProductDetailPage from "../pages/ProductDetail.page";
import ProfilePage from "../pages/Profile.page";

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
]);

export default router;
