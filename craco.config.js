const webpack = require("webpack");

module.exports = {
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        "globalThis.__DEV__": false,
      }),
    ],
  },
};
