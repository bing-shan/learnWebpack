//这个文件是手动创建的，并且文件名是固定的，不能随便更改，它是由webpack自动来读取的。它是运行在nodejs环境的，因此需要使用commonjs规范。
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "none",
};
