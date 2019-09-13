module.exports = {
    entry: {
        portfolio: './views/index.tsx'
    },
    output: {
        filename: '[name].min.js',
        chunkFilename: '[name].min.js',
        path: `${__dirname}/dist`,
        publicPath: '/reesmanp.github.io/dist/',
        webassemblyModuleFilename: "[modulehash].wasm"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json', '.wasm']
    },

    module: {
        rules: [{
            test: /\.wasm$/,
            type: "webassembly/experimental"
        }, {
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

    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'pdfjs-dist': 'pdfjsDistWebPdfViewer',
        'pdfjs-dist/lib/web/pdf_link_service': 'pdfjsDistWebPdfViewer.PDFJS'
    },
};
