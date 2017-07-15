var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: __dirname,
    entry: { app: './src/main.jsx' },
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: "bundle.js",
      devtoolModuleFilenameTemplate: '[resourcePath]',
      devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { sourceMap: true }},
            { loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [path.resolve(__dirname, 'assets', 'stylesheet')]
              }
            }
          ]
        }
      ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  }
}
