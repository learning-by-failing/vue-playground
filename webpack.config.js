const path = require('path');

module.exports = {
    entry: {
        myTest: './webpackTest',
        components: './components/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};