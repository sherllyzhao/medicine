import {
  Breadcrumb,
  Layout as LayoutWrap,
  Menu,
  Avatar,
  Space,
  Dropdown,
  Card,
} from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { logoutApi } from "../api/user";
import { routes } from "../routes";

const { Header, Content, Sider } = LayoutWrap;

const mapStateToProps = (state) => ({
  userInfo: state.user?.data,
});

const Layout = (props) => {
  const { userInfo } = props;

  const [breadList, setBreadList] = useState([{ title: "首页", path: "/home" }]);

  const [menu, setMenu] = useState([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(["home"]);

  const locationInfo = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (locationInfo.pathname === "/") {
      navigate("/home");
    }

    const handlerFormatterMenu = (list) => {
      list.forEach(v => {
        if(v.children && v.children.length) {
          handlerFormatterMenu(v.children)
        }
        v.label = v.meta.title;
        v.key = v.path;
        v.path = v.path;
        v.children = v.children;
        delete v.hasErrorBoundary;
        delete v.element;
      })
      return list;
    }

    const routesList = routes.routes;
    const menuList = routesList.find((item) => item.path === '/').children;
    const showMenuList = JSON.parse(JSON.stringify(menuList.filter((item) => !item.hidden)));
    const formatterMenuList = handlerFormatterMenu(showMenuList);
    setMenu(formatterMenuList);

    setDefaultSelectedKeys([locationInfo.pathname.split('/')[locationInfo.pathname.split('/').length - 1]]);
    console.log('[ defaultSelectedKeys ] >', [locationInfo.pathname.split('/')[locationInfo.pathname.split('/').length - 1]])
  }, [locationInfo.pathname, navigate]);

  /**
   * 退出登录
   */
  const logout = async () => {
    const res = await logoutApi();
    if (res.code === 200) {
      navigate("/login");
    }
  };

  const userNav = [
    {
      key: "userInfo",
      label: <Link to="/self">个人信息</Link>,
    },
    {
      key: "logout",
      label: <div onClick={logout}>退出登录</div>,
    },
  ];

  // 图片
  const logo = require("@/assets/images/logo.png");

  return (
    <LayoutWrap
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center">
          <img src={logo} className="w-[40px]" />

          <div className="text-white text-[18px] ml-[20px]">中医药系统</div>
        </div>

        <Dropdown menu={{ items: userNav }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {
                <div className="flex items-center">
                  {userInfo.avatar ? (
                    <Avatar size={64} src={userInfo.avatar} />
                  ) : (
                    <Avatar size={64} icon={<UserOutlined />} />
                  )}

                  <div className="text-white text-[16px]">{userInfo.name}</div>
                </div>
              }

              <DownOutlined
                style={{ color: "#fff", transform: "translateY(2px)" }}
              />
            </Space>
          </a>
        </Dropdown>
      </Header>

      <LayoutWrap style={{ flex: 1 }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={defaultSelectedKeys}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={menu}
          />
        </Sider>

        <LayoutWrap
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
            items={breadList}
          ></Breadcrumb>
          <Content
            style={{
              margin: 0,
              minHeight: 280,
              borderRadius: "20px",
            }}
          >
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <Outlet />
            </Card>
          </Content>
        </LayoutWrap>
      </LayoutWrap>
    </LayoutWrap>
  );
};
export default connect(mapStateToProps)(Layout);
