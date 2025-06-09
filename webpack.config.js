const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "js/[name].[contenthash].js" : "js/[name].js",
      publicPath: "/",
      clean: true,
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    module: {
      rules: [
        // JavaScript/React
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        // CSS, PostCSS, Tailwind
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
          ],
        },
        // Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name].[hash][ext]",
          },
        },
        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[hash][ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        inject: "body",
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: "css/[name].[contenthash].css",
            }),
          ]
        : []),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      hot: false,
      liveReload: false,
      client: {
        progress: false,
      },
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
    performance: {
      hints: isProduction ? "warning" : false,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
