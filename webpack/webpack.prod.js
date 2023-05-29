const Webpack = require("webpack");
const path = require("path")
const CssMin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

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
    filename: "bundle.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                // This will transform your png/jpg into webp.
                webp: true,
                disableOnDevelopment: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html'
    // }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['mozjpeg', { quality: 85 }],
            ['optipng', { optimizationLevel: 3 }],
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
      generator: [
        {
          preset: 'webp',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ['imagemin-webp']
          }
        }
      ]
    })
  ],
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     "...",
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           plugins: [
  //             "imagemin-gifsicle",
  //             "imagemin-mozjpeg",
  //             "imagemin-pngquant",
  //             "imagemin-svgo",
  //           ],
  //         },
  //       },
  //       generator: [
  //         {
  //           // You can apply generator using `?as=webp`, you can use any name and provide more options
  //           preset: "webp",
  //           implementation: ImageMinimizerPlugin.imageminGenerate,
  //           options: {
  //             plugins: ["imagemin-webp"],
  //           },
  //         },
  //       ],
  //     }),
  //   ],
  // },

};
