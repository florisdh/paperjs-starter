const path = require('path');
const common = require(path.join(__dirname, 'webpack.common.js'));
const config = require(path.join(common.context, 'package.json'));
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: `${config.name}.min.js`,
        path: path.join(common.context, '_build/dist')
    }
});
