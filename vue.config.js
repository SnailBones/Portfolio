const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("image-minimizer").use(ImageMinimizerPlugin, [
      {
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 50,
              },
              png: {
                quality: 50,
              },
            },
          },
        },
      },
    ]);
  },
};
