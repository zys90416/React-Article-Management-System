//添加自定义webpage 配置


const path = require('path')

module.exports = {
    //配置
    webpack: {
        alias :{
            // 约定用@ 表示scr文件的路径
            '@': path.resolve(__dirname, 'src')
        }
    }
}