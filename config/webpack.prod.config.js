const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../", "src", "index.ts")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, "tsconfig.prod.json")
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../", "dist")
  }
};
