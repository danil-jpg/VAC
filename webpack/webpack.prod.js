const Webpack = require("webpack");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path")
const CssMin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Codevolution"),
    }),
  ],

  output: {
    path: path.resolve(__dirname, "..", "docs"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
        // type: "asset",
        // generator: {
        //   filename: 'images/[name]'
        // },
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              name: '[path][name].[ext]',
              compress: {
                webp: true,
                disableOnDevelopment: true,
              },
            },
          }
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMin(),
      new HtmlMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
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
                },
              ],
            ],
          },
        },
      }),
      // new TerserPlugin()
    ],
  },
};
