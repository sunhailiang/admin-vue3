import mixColor from './mixColor.json'
import rgbHex from 'rgb-hex'
import color from 'css-color-function'
import axios from 'axios'

// 根据主色生成色表
export const generateColor = (primary) => {
  if (!primary) return
  const colors = {
    primary
  }
  Object.keys(mixColor).forEach((key) => {
    const val = mixColor[key].replace(/primary/g, primary)
    colors[key] = '#' + rgbHex(color.convert(val))
  })
  return colors
}
// 获取element-plus默认样式表,并打上标记
export const elementDefaultStyleAndTag = async () => {
  const version = require('element-plus/package.json').version
  const defaultStyleUrl = `https://unpkg.com/element-plus@${version}/dist/index.css`
  const { data } = await axios(defaultStyleUrl)
  // 给需要替换的地方打个标记
  return getStyleTemplate(data)
}
// 给需要替换的打上tag
const getStyleTemplate = (data) => {
  // element-plus 默认色值
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }

  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}
// 根据主题色生成最新样式表
export const generateNewStyle = async (primaryColor) => {
  // 根据主题色生成色表
  const colors = generateColor(primaryColor)
  // 获取element-plus样式表，把需要替换的打上标记
  let withTagCss = await elementDefaultStyleAndTag()
  // 全局替换
  Object.keys(colors).forEach((key) => {
    withTagCss = withTagCss.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    )
  })
  return withTagCss
}
// 把生成的样式表写入style
export const writeNewStyle = (newStyle) => {
  const style = document.createElement('style')
  style.innerText = newStyle
  document.head.appendChild(style)
}
