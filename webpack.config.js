const path = require('path');

const config = {
    entry: './src/horizon.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-horizon.js'
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
        
    ]
};

module.exports = config;