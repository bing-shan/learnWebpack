//这个文件是手动创建的，并且文件名是固定的，不能随便更改，它是由webpack自动来读取的。它是运行在nodejs环境的，因此需要使用commonjs规范。
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//用于将打包出来的css文件抽离成一个单独的文件，通过link标签的形式插入HTML的head标签。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    assetModuleFilename: "images/[contenthash][ext]",
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

        /**这里generator配置的作用和上面output中assetModuleFilename: "images/[contenthash][ext]"的作用相同，generator权重更高。**/
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
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
