module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.css$/,
            loader: 'style!css!'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    }
};
