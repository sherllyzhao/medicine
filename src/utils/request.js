/*eslint-disable*/
import axios from "axios";
import { store } from "../store";
import Message from "./message";
import { useNavigate } from "react-router-dom";

const message = new Message();
// import {resetToken} from "../store/action";

// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_PROXY_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});

// axios.defaults.withCredentials = true

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const { token } = store.getState();
    if (token.token) {
      config.headers["token"] = token.token;
    }

    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
        console.log(message.setOption)
      message.setOption({
        message: res.msg || "Error",
        type: "error",
        duration: 100 * 1000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 401) {
        // to re-login
        message.setOption({
          message: res.msg || "Error",
          type: "error",
          duration: 2 * 1000,
        });
        setTimeout(() => {
            const navigate = useNavigate();
            navigate('/login');
        }, 2000)
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    alert(error.message);
    return Promise.reject(error);
  }
);

export default service;
