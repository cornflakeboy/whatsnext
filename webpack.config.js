const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = env =>{
    return {
        entry: './src/index.tsx',
        devtool: 'inline-source-maps',
        mode: env.WEBPACK_BUILD_MODE,
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 9000
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.png']
        },
        module: {
            rules: [
                {
                    test: /\.(jsx?|tsx?)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    modules: false,
                                    targets: "defaults, ie 11, iOS >= 7",
                                    useBuiltIns: 'usage',
                                    "debug": true
                                }]
                            ]
                        }
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'tslint-loader',
                        options: {
                            emitErrors: true,
                            fix: true
                        }
                    },
                    enforce: 'pre'
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.template.html'
            })
        ],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'app-bundle.js'
        }
    }
};
