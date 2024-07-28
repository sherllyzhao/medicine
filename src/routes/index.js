import {createBrowserRouter} from "react-router-dom";
import Login from "../views/login/Login";
import Layout from "../layout/Layout";
import Self from "../views/self/Self";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Login />,
  },
  {
    path: "/",
    element: (<Layout />),
    redirect: "home",
    meta: {
      title: '首页'
    },
    children: [
      { path: "home", element: <div>home</div>, meta: {title: '首页'} },
      { path: "self", element: <Self />, meta: {title: '个人中心'}, hidden: true },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
