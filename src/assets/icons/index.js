/**
 * 注册svg
 */
/**
 * 1. 读取文件
 */
const svgRequire = require.context('./svg', false, /\.svg$/)
/**
 * 2. 遍历注册
 */
svgRequire.keys().forEach((svg) => svgRequire(svg))
