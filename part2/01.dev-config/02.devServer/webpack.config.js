const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    clean: true,
    publicPath: "/", //改为绝对路径
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    // compress: false,//在网络请求时是否使用压缩格式，默认为true。
    port: 3000, //默认为8080
    headers: {
      "X-Access-Token": "abc123",
    },

    //视频中的配置，重启服务时会报错，需要将proxy配置为一个数组的形式
    //https://webpack.js.org/configuration/dev-server/#devserverproxy
    // proxy: {
    //   "/api": "http://localhost:9000",
    // },
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:9000",
      },
    ],

    server: "https",
    historyApiFallback: true,
    host: "0.0.0.0",
  },
  plugins: [new HtmlWebpackPlugin()],
};
