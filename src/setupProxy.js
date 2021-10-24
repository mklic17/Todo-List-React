const {createProxyMIddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api',
        createProxyMiddlewre({
            target: 'http://localhost:4000',
            changeOrigin: true,
            pathRewrite: {'^/api':''}
        })
    );  
} 