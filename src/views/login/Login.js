import "./login.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Input, Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../../api/user";
import { store } from "../../store";

const Login = () => {
  const splitImg = require("@/assets/images/split.png");

  const [title, setTitle] = useState("");
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    switch (pathname) {
      case "/login":
        setTitle("登录");
        break;
      case "/register":
        setTitle("注册");
        break;
      default:
        break;
    }
  }, [pathname]);

  // 登录或注册的另一个操作
  const other = {
    "/login": { title: "注册", url: "/register" },
    "/register": { title: "登录", url: "/login" },
  };

  // 表单
  const [form, setForm] = useState({
    username: "",
    password: "",
    password2: "",
  });

  // 表单赋值
  const changeData = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // 表单提交
  const navigate = useNavigate();

  const [messageApi] = message.useMessage();

  // 提交并跳转
  const submit = async () => {
    let res;
    if(pathname === "/register"){
      res = await registerApi(form);
    }else{
      res = await loginApi(form);
    }    
    if (res.code === 200 && res.data) {
      store.dispatch({ type: "SET_USERINFO", data: res.data });
      messageApi.success(res.msg || other[pathname].title + "成功");
      navigate("/");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-wrap bg-white w-full h-full bg-no-repeat flex">
      <div className="form-wrap flex flex-1 justify-center items-center h-full pt-[50px] pb-[50px] overflow-auto min-h-full">
        <Form
          name="basic"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={submit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex flex-col items-center w-full"
        >
          <h1 className="text-[60px] text-[#773E15] text-center">{title}</h1>

          <img className="w-[200px] h-[30px] mt-[20px]" src={splitImg} alt="" />

          <Form.Item
            name="username"
            className="mt-[70px]"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input
              className="w-[600px] h-[80px] border-t-0 border-l-0 border-r-0 border-b-[rgba(119,62,21,0.41)]"
              placeholder="请输入用户名"
              value={form.username}
              onChange={(e) => {
                changeData("username", e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
              () => ({
                validator(_, value) {
                  if(value.trim() === ''){
                    return Promise.reject(new Error('请输入密码!'));
                  }
                  // 密码不包括汉字
                  if(/[\u4e00-\u9fa5]/g.test(value)){
                    return Promise.reject(new Error('密码不能包含汉字!'));
                  }
                  // 密码长度为6-16位
                  if(value.length < 6 || value.length > 16){
                    return Promise.reject(new Error('密码长度为6-16位!'));
                  }
                  // 密码必须包含数字、字母、符号中的至少两种
                  if(!/[0-9]/.test(value) || !/[a-zA-Z]/.test(value)){
                    return Promise.reject(new Error('密码必须包含数字、字母两种!'));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input
              type="password"
              className="w-[600px] text-[#222] h-[80px] border-t-0 border-l-0 border-r-0 border-b-3 border-b-[rgba(119,62,21,0.41)]"
              placeholder="请输入密码"
              value={form.password}
              onChange={(e) => {
                changeData("password", e.target.value);
              }}
            />
          </Form.Item>

          {title === "注册" && (
            <Form.Item
              name="password2"
              rules={[
                {
                  required: true,
                  message: "请输入密码!",
                },
                () => ({
                  validator(_, value) {
                    if(value.trim() === ''){
                      return Promise.reject(new Error('请输入密码!'));
                    }
                    // 与第一次输入的密码不一致
                    if(value !== form.password){
                      return Promise.reject(new Error('2次输入的密码不一致!'));
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input
                type="password"
                className="w-[600px] text-[#222] h-[80px] border-t-0 border-l-0 border-r-0 border-b-3 border-b-[rgba(119,62,21,0.41)]"
                placeholder="请再次输入密码"
                value={form.password2}
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: "请再次输入密码!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('2次输入的密码不一致!'));
                    },
                  }),
                ]}
                onChange={(e) => {
                  changeData("password2", e.target.value);
                }}
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              color="primary"
              className="bg-[#773E15] rounded-none w-[600px] h-[80px] shrink-0 mt-[100px] text-[30px] tracking-widest text-[#fff] hover:bg-[#773E15] hover:text-[#fff]"
              onClick={submit}
            >
              {title}
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="link" href={other[pathname].url} className="text-[#859F22] text-[26px]">
              {other[pathname].title}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
