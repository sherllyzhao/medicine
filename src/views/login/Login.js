import './login.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Input, Button, Link} from "@nextui-org/react";
import Alert from '../../components/alert/Alert';


const Login = () => {
  const bg = require('@/assets/images/login-bg.png');
  const splitImg = require('@/assets/images/split.png');

  const [title, setTitle] = useState('');
  const location = useLocation();
  const {pathname} = location;
  const [gap, setGap] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case '/login':
        setTitle('登录');
        setGap(50);
        break;
      case '/register':
        setTitle('注册');
        setGap(30);
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
    password: '',
    password2: ''
  });

  const changeData = (field, value) => {
    setForm({
     ...form,
      [field]: value
    });
  }

  const validate = () => {
    if(!form.username){
      Alert({
        title: '提示',
        content: '123'
      });
      return false;
    }
    if(pathname === 'login'){
      return form.username && form.password;
    }else{
      return form.username && form.password && form.password2 && form.password === form.password2;
    }
  }

  const submit = () => {
    validate();
    console.log(form, 'form');
  }

  return <div className="login-wrap bg-white w-full h-full bg-no-repeat flex">
    <img className="bg block w-[49%] h-full object-cover" src={bg} alt="" />

    <div className="form-wrap flex flex-1 justify-center items-center h-full pt-[50px] pb-[50px] overflow-auto min-h-full">
      <form className="flex flex-col items-center w-full">
        <h1 className="text-[70px] text-[#773E15] text-center">{title}</h1>

        <img className="w-[230px] h-[40px] mt-[20px]" src={splitImg} alt="" />

        <div className={`flex flex-col justify-center items-center flex-1 mt-[70px] gap-y-[${gap}px]`}>
          <Input isRequired className="w-[616px] h-[93px] border-b-3 border-b-[rgba(119,62,21,0.41)]" isClearable placeholder="请输入用户名" value={form.username} onChange={e => {changeData('username', e.target.value)}} />

          <Input isRequired className="w-[616px] text-[#222] h-[93px] border-b-3 border-b-[rgba(119,62,21,0.41)]" isClearable placeholder="请输入密码" value={form.password} onChange={e => {changeData('password', e.target.value)}}  />

          {title === '注册' && <Input isRequired className="w-[616px] text-[#222] h-[93px] border-b-3 border-b-[rgba(119,62,21,0.41)]" isClearable placeholder="请再次输入密码" value={form.password2} onChange={e => {changeData('password2', e.target.value)}}  />}
        </div>

        <Button color="primary" className="bg-[#773E15] rounded-none w-[616px] h-[80px] shrink-0 mt-[100px] text-[30px] tracking-widest" onClick={submit}>
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