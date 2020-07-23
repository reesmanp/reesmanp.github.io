const path = require('path');

module.exports = {
    entry: {
        portfolio: path.resolve(__dirname, 'views', 'index.jsx')
    },
    output: {
        filename: '[name].min.js',
        chunkFilename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/reesmanp.github.io/dist/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [{
            test: /\.css$/,
            include: path.resolve(__dirname, 'views'),
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]
        }, {
            test: /\.pdf$/,
            include: path.resolve(__dirname, 'static', 'images'),
            use: 'file-loader'
        }, {
            test: /\.jsx$/,
            include: path.resolve(__dirname, 'views'),
            use: 'babel-loader'
        }, {
            enforce: 'pre',
            test: /\.js$/,
            include: path.resolve(__dirname, 'views'),
            use: 'source-map-loader'
        }]
    },

    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
};
