const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
              // placehoder 占位符
              name: "[name]_[hash].[ext]",
              outputPath: "imges/",
              limit: 10240
          }
        }
      },
      {
        test: /\.scss/,
        // loader 从下到上 从右到左
        use: [ 
            'style-loader',
             {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
             },
             'sass-loader',
             'postcss-loader'
            ]    
      }
    ]   
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
