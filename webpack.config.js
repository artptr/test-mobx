const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].js",
  },
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
      },
    ],
  },
};
