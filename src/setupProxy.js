const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
      '/listado_modulos',
      createProxyMiddleware({
        target: 'http://bci.qa.globaldigital.cl/salesforce/v2',
        changeOrigin: true,
      })
    );
  };