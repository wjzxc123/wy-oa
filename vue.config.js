module.exports = {
    outputDir: 'dist',
    filenameHashing: false,
    productionSourceMap: false,
    devServer: {proxy: 'http://localhost:8000',disableHostCheck: true},
    configureWebpack: {performance: {hints: false}}
};