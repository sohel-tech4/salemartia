import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/productdetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`)
      }
    ],
  },
]);
