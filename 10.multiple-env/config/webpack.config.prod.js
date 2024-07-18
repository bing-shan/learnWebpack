//用于在打包时压缩css代码。
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

//用于打包时压缩js代码：
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    filename: "scripts/[name].[contenthash:4].js",
    publicPath: "http://localhost:8080/",
  },
  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
  },
};
