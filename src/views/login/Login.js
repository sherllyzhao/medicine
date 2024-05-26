import './login.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Input} from "@nextui-org/react";


const Login = () => {
  const bg = require('@/assets/images/login-bg.png');
  const splitImg = require('@/assets/images/split.png');

  const [title, setTitle] = useState('');
  const location = useLocation();
  const {pathname} = location;

  useEffect(() => {
    switch (pathname) {
      case '/login':
        setTitle('登录');
        break;
      case '/register':
        setTitle('注册');
        break;
      default:
        break;
    }
  }, [pathname]);

  return <div className="login-wrap bg-white w-full h-full bg-no-repeat flex items-center">
    <img className="bg block w-[49%] h-full object-cover" src={bg} alt="" />
    <div className="form-wrap flex flex-1 justify-center h-full pt-[120px] pb-[100px]">
      <form className="flex flex-col items-center w-full">
        <h1 className="text-[80px] text-[#773E15] text-center">{title}</h1>
        <img className="w-[230px] mt-[20px]" src={splitImg} alt="" />

        <Input className="w-[616px] text-[30px] mt-[111px] h-[93px] border-b-3 border-b-[rgba(119,62,21,0.41)]" isClearable placeholder="请输入用户名" />
      </form>
    </div>
  </div>
}
export default Login