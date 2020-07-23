const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [new UglifyJsPlugin({
            include: path.resolve(__dirname, 'views')
        })]
    }
});
