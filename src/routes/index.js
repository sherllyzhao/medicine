import {createBrowserRouter} from "react-router-dom";
import Login from "../views/login/Login";
import Layout from "../layout/Layout";

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
    redirect: "/home",
    children: [
      { path: "home", element: <div>home</div> },
      { path: "self", element: <div>self</div> },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
