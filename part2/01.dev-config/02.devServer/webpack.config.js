const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    // compress: false,//在网络请求时是否使用压缩格式
    port: 3000,
    headers: {
      "X-Access-Token": "abc123",
    },
  },
  plugins: [new HtmlWebpackPlugin()],
};
