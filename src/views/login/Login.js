import './login.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

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

  return <div className="login-wrap bg-white w-[100%] h-[100%] bg-no-repeat flex items-center">
    <img className="bg block w-[49%] h-[100%] object-cover" src={bg} alt="" />
    <div className="form-wrap flex flex-1 justify-center h-[100%] pt-[1.2rem] pb-[1rem]">
      <form className="flex flex-col justify-center">
        <h1 className="text-[0.8rem] text-[#773E15] text-center">{title}</h1>
        <img className="w-[2.3rem] mt-[0.2rem]" src={splitImg} alt="" />
      </form>
    </div>
  </div>
}
export default Login