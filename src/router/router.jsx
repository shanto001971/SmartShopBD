import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Collection from "../Collection/Collection";
import Home from "../Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/collection",
            element:<Collection/>
        },
        
      ]
    },
  ]);