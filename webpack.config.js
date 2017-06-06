var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, 'app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader'
                })
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        // 把 import 导入的文件打包到一个文件中
        new ExtractTextPlugin('style.css')
    ]
};