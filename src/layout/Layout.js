import {
  Breadcrumb,
  Layout as LayoutWrap,
  Menu,
  theme,
  Avatar,
  Space,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Header, Content, Sider } = LayoutWrap;

const Layout = (props) => {
  const { childEle } = props;
  const [userInfo, setUserInfo] = useState({
    username: "",
    avatar: "",
  });

  // 图片
  const logo = require("@/assets/images/logo.png");

  return (
    <LayoutWrap>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center">
          <img src={logo} className="w-[40px]" />

          <div className="text-[white] text-[18px] ml-[20px]">中医药系统</div>
        </div>

        <div className="flex items-center">
          {userInfo.avatar ? (
            <Avatar size={64} src={userInfo.avatar} />
          ) : (
            <Avatar size={64} icon={<UserOutlined />} />
          )}
        </div>
      </Header>
    </LayoutWrap>
  );
};
export default Layout;
