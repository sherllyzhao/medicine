import {
  Breadcrumb,
  Layout as LayoutWrap,
  Menu,
  Avatar,
  Space,
  Dropdown,
} from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { connect } from 'react-redux';
const { Header, Content, Sider } = LayoutWrap;
 
const mapStateToProps = (state) => ({
  userInfo: state.user?.data,
});

const Layout = (props) => {
  const { childEle, userInfo } = props;
  console.log('[ props ] >', userInfo);

  const userNav = [
    {
      key: 'userInfo',
      label: (
        <div>个人信息</div>
      ),
    },
    {
      key: 'logout',
      label: (
        <div>退出登录</div>
      ),
    },
  ];

  const menu = [];

  // 图片
  const logo = require("@/assets/images/logo.png");

  return (
    <LayoutWrap style={{display: "flex", flexDirection: "column", height: '100vh'}}>
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
              {<div className="flex items-center">
                {userInfo.avatar ? (
                  <Avatar size={64} src={userInfo.avatar} />
                ) : (
                  <Avatar size={64} icon={<UserOutlined />} />
                )}

                <div className="text-white text-[16px]">
                  {userInfo.name}
                </div>
              </div>}

              <DownOutlined style={{color: '#fff', transform: 'translateY(2px)'}} />
            </Space>
          </a>
        </Dropdown>
      </Header>

      <LayoutWrap style={{flex: 1}}>
        <Sider
          width={200}
        >
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={menu}
          />
        </Sider>

        <LayoutWrap
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              borderRadius: '20px',
            }}
          >
            {childEle}
          </Content>
        </LayoutWrap>
      </LayoutWrap>
    </LayoutWrap>
  );
};
export default connect(mapStateToProps)(Layout);
