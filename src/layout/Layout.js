const Layout = props => {
  const { childEle } = props;

  // 图片
  const logo = require('@/logo.svg');

  return <div className="main">
    <header className="flex justify-around items-center h-[50px] bg-[rgb(229, 231, 235)]">
      <div className="left">
        <img src={logo} alt="" />
      </div>
    </header>
    <div className="container">
      {childEle}
    </div>
  </div>
}
export default Layout
