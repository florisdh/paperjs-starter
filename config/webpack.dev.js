const path = require('path');
const common = require(path.join(__dirname, 'webpack.common.js'));
const config = require(path.join(common.context, 'package.json'));
const merge = require('webpack-merge');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true 
                }
            }
        ]
    },
    output: {
        filename: `${config.name}.js`,
        path: path.join(common.context, '_build/dev')
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
});
