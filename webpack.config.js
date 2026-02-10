const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    // Cette ligne aide Webpack à gérer les chemins d'images
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // --- LA RÈGLE MAGIQUE POUR TON PNG ---
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      // C'est ici qu'on dit au serveur : "Regarde aussi dans /public !"
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true, // Très utile pour les futures routes React
  },
};
