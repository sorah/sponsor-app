const path = require("path");
const glob = require("glob");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

const entries = {};
glob.sync("app/javascript/packs/*.{ts,tsx}").forEach(filePath => {
  const name = path.basename(filePath, path.extname(filePath));
  console.log(name);
  entries[name] = path.resolve(__dirname, filePath);
});

module.exports =  [
  {
    mode: isProd ? "production" : "development",
    devtool: "source-map",
    entry: entries,
    output: {
      path: path.resolve(__dirname, "public/packs"),
      publicPath: "/packs/",
      filename: isProd ? "[name]-[hash].js" : "[name].js",
    },
    optimization: {
      splitChunks: {
        name: "vendor",
        chunks: "initial"
      },
      minimize: isProd,
      minimizer: [new TerserPlugin({
        terserOptions: {
          keep_classnames: false,
          compress: {
            ecma: "2017",
          },
        }
      })],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.s[ca]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_module/,
          use: {
            loader: 'ts-loader',
            options: {
              instance: 'main',
            }
          }
        }
      ]
    },
    plugins: [
      new WebpackAssetsManifest({ publicPath: true }),
      new MiniCssExtractPlugin({
        filename: isProd ? "[name]-[hash].css" : "[name].css"
      }),
    ]
  },
]
