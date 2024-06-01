import './login.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Input, Button, Link} from "@nextui-org/react";


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

  // 登录或注册的另一个操作
  const other = {
    '/login': {title: '注册', url: '/register'},
    '/register': {title: '登录', url: '/login'}
  };
 
  // 表单
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const changeData = (field, value) => {
    console.log(field, value, 'field, value');
    setForm({
     ...form,
      [field]: value
    });
  }

  const submit = () => {
    console.log(form, 'form');
  }

  return <div className="login-wrap bg-white w-full min-h-full bg-no-repeat flex items-center">
    <img className="bg block w-[49%] h-full object-cover" src={bg} alt="" />

    <div className="form-wrap flex flex-1 justify-center h-full pt-[110px] pb-[100px] overflow-auto">
      <form className="flex flex-col items-center w-full">
        <h1 className="text-[80px] text-[#773E15] text-center">{title}</h1>

        <img className="w-[230px] mt-[20px]" src={splitImg} alt="" />

        <Input isRequired className="w-[616px] text-[30px] mt-[111px] h-[93px] border-b-3 border-b-[rgba(119,62,21,0.41)]" isClearable placeholder="请输入用户名" value={form.username} onChange={e => {changeData('username', e.target.value)}} />

        <Input isRequired className="w-[616px] text-[30px] text-[#222] mt-[53px] h-[93px] border-b-3 border-b-[rgba(119,62,21,0.41)]" isClearable placeholder="请输入密码" value={form.password} />

        <Button color="primary" className="bg-[#773E15] rounded-none w-[616px] h-[93px] shrink-0 mt-[148px] text-[30px] tracking-widest" onClick={submit}>
          {title}
        </Button>
        
        <Link href={other[pathname].url} underline="always" className="mt-[52px] text-[#859F22] text-[26px]">
          {other[pathname].title}
        </Link>
      </form>
    </div>
  </div>
}
export default Login