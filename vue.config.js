const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    pages: {
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                /*     pathRewrite: { '^/api': '' }, */
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            },
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("base", resolve("baseConfig"))
            .set("public", resolve("public"));
    },
}