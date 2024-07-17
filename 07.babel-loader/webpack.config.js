//这个文件是手动创建的，并且文件名是固定的，不能随便更改，它是由webpack自动来读取的。它是运行在nodejs环境的，因此需要使用commonjs规范。
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "./images/[contenthash][ext]",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "app.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
  ],
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        // generator: {
        //   filename: "images/[contenthash][ext]",
        // },
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.jpeg$/,
        type: "asset",
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
  },
};
