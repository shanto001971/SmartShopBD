import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Collection from "../Collection/Collection";
import Home from "../Home/Home";
import SingUpPage from "../Components/Shared/SingUpPage/SingUpPage";
import UserLogInPage from "../Components/Shared/UserLogInPage/UserLogInPage";
import ProductsChackOut from "../Components/ProductsChackOutPage/ProductsChackOut";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/collection",
        element: <Collection />
      },
      {
        path: "/cardCollection/:id",
        element: <ProductsChackOut />,
        loader: () => fetch('http://localhost:5000/cardCollection')
      },

    ]
  },
  {
    path: "/logIn",
    element: <UserLogInPage />
  },

  {
    path: "/signUp",
    element: <SingUpPage />
  }
]);