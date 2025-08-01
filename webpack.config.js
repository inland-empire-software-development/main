const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    
    return {
        entry: {
            main: './assets/js/main.js',
            style: './assets/scss/style.scss'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name][ext]'
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            ...(isProduction ? [] : [
                new BrowserSyncPlugin({
                    host: 'localhost',
                    port: 3000,
                    proxy: 'http://localhost:8080', // Adjust to your local WordPress URL
                    files: [
                        'templates/**/*.twig',
                        '**/*.php',
                        'dist/**/*.css',
                        'dist/**/*.js'
                    ],
                    reloadDelay: 0
                })
            ])
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            hot: true,
            port: 3001
        },
        devtool: isProduction ? false : 'source-map'
    };
}; 