const path = require('path');
const root = path.join(__dirname, '../');
const config = require(path.join(root, 'package.json'));

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: root, // to automatically find tsconfig.json
    entry: path.join(root, 'src/index.ts'),
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: config.title,
            template: './templates/index.handlebars',
            hash: true
        }),
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' }
        ]),
    ]
};
