const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'scripts.min.js',
    },
    module: {
        loaders: [{
                test:/\.jsx?$/,
                loader: ['babel-loader'],
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: [ 'es2015', 'react', 'stage-0' ]
                }
            }]
    }
}