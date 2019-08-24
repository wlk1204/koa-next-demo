import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'

const conf = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    const cssLoader = {
      loader: 'css-loader',
      options: {
        modules: true,
        url: true,
        import: false,
        // localIdentName: '[local]_[hash:base64:5]',
      },
    }

    const sassLoader = {
      loader: 'sass-loader',
      options: {
        modules: true,
        url: true,
        import: false,
      },
    }

    // 配置 antd
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    config.module.rules.push({
      test: /\.css$/,
      include: [
        path.resolve(__dirname, './client/'),
        path.resolve(__dirname, './node_modules/'),
      ],
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
      ]
    });

    // 配置scss
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      include: [path.resolve(__dirname, './client/')],
      use: [
        MiniCssExtractPlugin.loader,
        cssLoader,
        sassLoader,
      ],
    })

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: dev
          ? 'static/chunks/[name].css'
          : 'static/chunks/[name].[contenthash:8].css',
        chunkFilename: dev
          ? 'static/chunks/[name].chunk.css'
          : 'static/chunks/[name].[contenthash:8].chunk.css',
      }),
    )

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
