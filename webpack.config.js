const path = require('path')
const webpack = require('webpack')
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const publicPath = '/'

module.exports = options => {
    const dev = options && options.mode === 'production'
    const mode = dev ? 'production' : 'development'
    const port = 8080
    console.log(mode)
    return ({
        mode,
        entry: {
            app: ['babel-polyfill', path.join(__dirname, 'public', 'src', 'app.js')],
            vendors: []
        },
        output: {
            path: path.join(__dirname, 'public', 'build'),
            publicPath
        },
        devtool:'source-map',
        module: {
            rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader',{
                    loader:'postcss-loader',
                    options:{
                        ident:'postcss',
                        plugins:[
                            autoprefixer({
                                browsers:['last 4 versions','Firefox ESR','> 1%','ie >= 8','iOS >= 8','Android >= 4'],
                                flexbox:'no-2009'
                            }),
                            pxtorem({
                                rootValue:16,
                                propList:['*'],
                                replace:true
                            })
                        ]
                    }
                }]
            }]
        },
        devServer: {
            port,
            inline:true,
            stats: {
                colors: true
            },
            proxy:{
                '/':{
                    target:'http://localhost:8001'
                }
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({
                url:`http://localhost:${port}`
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'src', 'template', 'index.html'),
                title: "Practice"
            })
        ]
    })
}