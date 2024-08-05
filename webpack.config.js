const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            util: require.resolve("util/")
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};