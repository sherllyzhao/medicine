import { Avatar, Descriptions } from "antd";
import { connect } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

const mapStateToProps = (state) => ({
  userInfo: state.user?.data,
});

const Self = (props) => {
  const { userInfo } = props;
  console.log('[ userInfo.avatar ] >', userInfo)

  const items = [
    {
      label: "头像",
      value: userInfo.avatar ? (
        <Avatar size={64} src={userInfo.avatar} />
      ) : (
        <Avatar size={64} icon={<UserOutlined />} />
      ),
    },
    { label: "用户名", value: userInfo.username },
    { label: "密码", value: userInfo.password },
  ];

  return <Descriptions items={items} />;
};

export default connect(mapStateToProps)(Self);
