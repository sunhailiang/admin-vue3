module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type枚举，即你在cz-config中配置的所有类型
    'type-enum': [
      // 错误级别：2表示error
      2,
      // 验证时机-一直验证
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 代码格式化（不影响代码执行的变动
        'refector', // 功能重构
        'po', // 性能优化
        'test', // 测试
        'utils', // 工具/插件变动
        'revert', // 回退
        'build' // 构建
      ]
    ],
    // subject不区分大小写
    'subject-case': [0]
  }
}
