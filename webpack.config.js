const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.tsx"
  },
  
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].js",
  },
  
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
  },
  
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel!ts",
      },
    ],
  },
};
