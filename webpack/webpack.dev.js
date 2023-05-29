const Webpack = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
      type: "asset/resource"
    },
    ]
  },

  devtool: "cheap-module-source-map",
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas")
    }),
    new ReactRefreshWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../src/assets/img/'),
        to: path.resolve(__dirname, '../src/assets/img/')
      }]
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
      }
    ),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                      addAttributesToSVGElement: {
                        params: {
                          attributes: [
                            { xmlns: "http://www.w3.org/2000/svg" },
                          ],
                        },
                      },
                    },
                  },
                },
              ],
            },],
          ],
        },
      },
    }),
    new ImageminWebpWebpackPlugin({
    })
    ]
  }
}
