//扩展webpack的配置

const path = require('path')

module.exports = {
    webpack: {
        // 配置路径别名
        alias: {
            //约定: 使用 @ 表示src文件所在路径
            "@": path.join(__dirname, "src"),
        },
    },
}
