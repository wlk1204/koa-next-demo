import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'

const conf = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    const sassLoader = {
      loader: 'sass-loader',
      options: {
        modules: true,
        url: true,
        import: false,
      },
    };

    config.module.rules.push({
      test: /\.(scss|sass)$/,
      include: [path.resolve(__dirname, './client/')],
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: false,
            url: true,
            import: false,
          },
        },
        sassLoader,
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/chunks/[name].css',
        chunkFilename: 'static/chunks/[name].chunk.css',
      })
    );

    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config
  //   // Important: return the modified config
  //   return config
  // },
}

module.exports = {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  ...conf,
}