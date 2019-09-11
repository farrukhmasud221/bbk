const merge = require('webpack-merge');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 48251,
        // disableHostCheck: true,
        // public: 'crm1.tes.com.pk',		
        compress: true, //enables gzip compression
        // proxy: {
        //     '/api': {
        //       target: 'http://localhost:3000',
        //       secure: false
        //     }
        // },
        // allowedHosts: [
        //     'localhost.com',
        //     'sub1.localhost.com',
        //     'sub2.localhost.com'
        // ],
        noInfo:true
        // https: {    //Way to Run Application on Secured HTTPS Protocol 
        //     cert: fs.readFileSync("./app/certificate/carol.crt"),
        //     key: fs.readFileSync("./app/certificate/carol.key"),
        //     cacert: fs.readFileSync("./app/certificate/ca.crt")
        // }
    }
});
