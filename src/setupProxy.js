// 此时的高版本需要拿到原来低版本导出值的子属性  createProxyMiddleware
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:9000/',
          changeOrigin: true,
          pathRewrite: {
              '^/api': '/api'
          }
        }),
      );
};
// 此时就可以打开项目了!!!	
