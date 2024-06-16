import {createBrowserRouter, Link} from "react-router-dom";
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
    element: (<Layout childEle={<div>home</div>} />
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
