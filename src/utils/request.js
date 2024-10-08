/*eslint-disable*/
import axios from "axios";
import { store } from "../store";
import Message from "./message";
import { useNavigate } from "react-router-dom";
// import {resetToken} from "../store/action";

const message = new Message();

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
      message.setOption({
        message: res.msg || "Error",
        type: "error",
        duration: 100 * 1000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 401) {
        const navigate = useNavigate();
        // to re-login
        message.setOption({
          message: res.msg || "Error",
          type: "error",
          duration: 2 * 1000,
        });
        setTimeout(() => {
            navigate('/login');
        }, 2000)
      }
      return {
        code: res.code,
        msg: res.msg,
        data: null,
      }
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
