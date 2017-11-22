const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './views/index.tsx',
    output: {
        filename: 'portfolio.min.js',
        path: `${__dirname}/dist`,
        publicPath: '/reesmanp.github.io/dist/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.scss' extension will be handled by 'sass-loader'.
            { test: /\.scss$/, loader: ExtractTextWebpackPlugin.extract('css-loader!sass-loader') },

            // All files with a '.css' extension will be handled by 'css-loader'.
            { test: /\.css$/, loader: 'css-loader' },

            // All files with a '.pdf' extension will be handled by 'file-loader'
            { test: /\.pdf$/, loader: 'file-loader' },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'portfolio.css',
            allChunks: true
        })
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
};
