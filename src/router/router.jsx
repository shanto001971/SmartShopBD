import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Collection from "../Collection/Collection";
import Home from "../Home/Home";
import SingUpPage from "../Components/Shared/SingUpPage/SingUpPage";
import UserLogInPage from "../Components/Shared/UserLogInPage/UserLogInPage";
import ProductsChackOut from "../Components/ProductsChackOutPage/ProductsChackOut";
import PrivateRoute from "../privateRoute/privateRoute";
import PlaceOrderPage from "../Components/PlaceOrderPage/PlaceOrderPage";
import CartPage from "../AddToCartPage/CartPage";
import ProceedToCheckOutPage from "../ProceedToCheckOutPage/ProceedToCheckOutPage";
import ConfirmOrderPage from "../ConfirmOrderPage/ConfirmOrderPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";
import CreateSeller from "../SellerPage/CreateSeller/CreateSeller";
import SellerLayOut from "../SellerPage/SellerLayOut/SellerLayOut";


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
        element: <PrivateRoute><ProductsChackOut /></PrivateRoute>,
        loader: () => fetch('https://smart-shop-bd.vercel.app/cardCollection')
      },
      {
        path: "/PlaceOrderPage/:id",
        element: <PlaceOrderPage />
      },
      {
        path: "/cartPage",
        element: <CartPage />,
      },
      {
        path: "/cartPage/ProceedToCheckOutPage",
        element: <ProceedToCheckOutPage />
      },
      {
        path: "/ConfirmOrderPage",
        element: <ConfirmOrderPage />
      },
      {
        path: "/CategoryPage/:category",
        element: <CategoryPage />
      },
      {
        path: "/search-results",
        element: <SearchResultsPage />
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
  },



  {
    path: "/sellerLayOutCenter",
    element: <SellerLayOut />,
    children: [
      {
        path: "/sellerLayOutCenter",
        element: <CreateSeller />
      }
    ]

  }
]);