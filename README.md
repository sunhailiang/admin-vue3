# admin-vue3

vue3 版本通用管理系统脚手架

## 代码规范

1. 代码规范先行
2. 多人协作时，如何保证代码的统一性？
3. 如何通过程序自动化规范代码统一性？

## 创建脚手架/添加校验规则

- 基础选择

1. create vue xxxxx
2. 选手动配置
3. 版本，babel，router，vuex，css pro-processors

- vue 版本选择级配置

1. 3.x
2. history
3. sass

- 校验规则/时机

1. Eslint + Standard config（标准方案）
2. Lint on save 和 Lint and fix commit 保存和提交时都进行 lint

- 使用 script setup 语法低版本不支持，所以要最新版本

1. npm i vue@3.2.8 vue-router@4.0.11 vuex@4.0.2

## Eslint 配置

- 级别

  1.  error 错误
  2.  warn 警告
  3.  off 关闭

- 设置

- 如以下打包报错

```js
  10:24  error  Strings must use singlequote  quotes
  10:53  error  Extra semicolon               semi
  13:9   error  Strings must use singlequote  quotes
  15:15  error  Unexpected trailing comma     comma-dangle
  16:4   error  Unexpected trailing comma     comma-dangle
  17:2   error  Extra semicolon               semi
```

- 人为干预顺利打包的两种方式

  1.  关闭校验/调整校验级别
  2.  到指定位置按规则修改代码

- 关于调整校验级别

1. 在.eslintrc.js 中 rutes
2. 上面这个报错信息最后一列就是 rutes 中的 key，至于 value，根据实际情况去修改（error/warn/off）

## Prettier

- 基本理解
  - https://www.prettier.cn/
  - 开箱即用的代码格式化工具
  - prettier+vscode 保存时直接格式化代码，使代码符合 eslint 规范
- 使用 prettier
  - 安装：如 vscode，直接应用商店，搜索 prettier 安装
  - 在项目根目录下新建.prettierrc

```js
{
  "semi": false, // 分号
  "singleQuote": true,// 单引号
  "trailingComma": "none" // 换行逗号
}
```

## 配置 vscode

- 开启保存时格式化代码

## 差异性配置

- vscode 一个 tab 默认 4 个空格，Eslint 默认 2 个空格
  1.  vscode/设置/tab size 改成 2 即可
- eslint 和 prettier 的冲突，如：钩子函数名称与括号之间的空格问题
  1.  那就让 eslint 不去校验

## git 代码提交规范

- 如：angular 约定式提交规范：https://www.conventionalcommits.org/zh-hans/v1.0.0/

## git 规范自动化工具（Commitzen）

- github：cz-cli
- 在你提交代码时让你填写必要的字段

- 安装：

  1. su pnpm i -g commitizen@4.2.4
  2. 安装配置插件
     1. pnpm i cz-customizable@6.3.0 --save-dev
  3. 配置 package.json

  ```json
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  }
  ```

  4. 配置提示文件
  1. 根目录创建.cz-config.
  1. 写入基本类型

  ```js
  module.exports={
  // 类型
  types:[
    {value:'feat',name:'feat:新功能'}，
    {value:'fix',name:'fix:修复'},
    {value:'docs',name:'docs:文档变更'},
    {value:'style',name:'style:代码格式化（不影响代码执行的变动）'},
    {value:'refector',name:'refector :功能重构'},
    {value:'po',name:'po:性能优化'},
    {value:'test',name:'test:测试'},
    {value:'utils',name:'utils:工具/插件变动'},
    {value:'revert',name:'revert:回退'},
    {value:'build',name:'build:构建 '},
  ],
  // 步骤
  messages:{
    type:"请选择提交类型:",
    customScope:"请输入修改范围(可选):",
    subject:"请简要描述提交(必填):",
    body:"请输入详细描述(可选)",
    footer:"请输入要关闭的issue？",
    confirmCommit:"确认使用以上信息提交（y/n）？"
  },
  // 指定忽略选项
  skipQuestions:['body','footer'],
  subjectLimit:72
  }
  ```

- 通过`git cz`命令替代`git commit`
