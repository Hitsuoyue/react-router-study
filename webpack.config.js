const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const proxy = require('http-proxy-middleware');
module.exports = {
    entry: './app.js',
    output: {
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8080,
        proxy:{
            '/v2':{
                target: 'http://api.douban.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/v2': '/v2'
                }
            }
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})//自动打开浏览器
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    node: {
        fs: "empty",
        net: "empty"
    }
};