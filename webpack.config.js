const path = require('path')
const webpack = require('webpack')
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const publicPath = '/'

module.exports = (env,options) => {
    const prod = options && options.mode === 'production'
    const mode = prod ? 'production' : 'development'
    const port = 8080
    console.log(mode)
    return ({
        mode,
        entry: {
            app: ['babel-polyfill', path.join(__dirname, 'public', 'src', 'app.js')]
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
                use: [ 'style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: [
                    prod ? MiniCssExtractPlugin.loader : 'style-loader', 
                    'css-loader', 
                    'less-loader',
                    {
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
            },{
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },]
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
            minimizer:[
                new UglifyJsPlugin({
                    cache:true,
                    parallel:true,
                    sourceMap:true
                }),
                new OptimizeCssAssetsPlugin({})
            ],
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
                title: "kugou"
            }),
            new MiniCssExtractPlugin({
                filename:'[name].css',
                chunkFilename:'[id].css'
            })
        ]
    })
}