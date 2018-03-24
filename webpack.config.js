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
        rules: [{
            test: /\.css$/,
            include: `${__dirname}/views`,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]
        }, {
            test: /\.pdf$/,
            include: `${__dirname}/static/images`,
            use: 'file-loader'
        }, {
            test: /\.tsx?$/,
            include: `${__dirname}/views`,
            use: 'awesome-typescript-loader'
        }, {
            enforce: 'pre',
            test: /\.js$/,
            include: `${__dirname}/views`,
            use: 'source-map-loader'
        }]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
};
