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

## Git Hooks（自动化校验提交信息是否合规）

- git 的钩子函数
- 目的：利用 githooks 部分函数，强制 git commit 的提交规范，不合规就聚聚头提交（强制走 git cz 流程）
- 常用的 Git Hooks 如下

| 函数名                | 执行阶段                                                                                                                                                    | 备注                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| pre-applypatch        | git am 执行前                                                                                                                                               |                                                           |
| applypatch-msg        | git am 执行前                                                                                                                                               |                                                           |
| post-applypatch       | git am 执行后                                                                                                                                               | 不影响 git am 结果                                        |
| pre-commit            | git commit 执行前                                                                                                                                           | 可以用 git commit --no-verify 绕过                        |
| commit-msg            | git commit 执行前                                                                                                                                           | 可以用 git commit --no-verify 绕过                        |
| post-commit           | git commit 执行后                                                                                                                                           | 不影响 git commit 结果                                    |
| pre-merge-commit      | git merge 执行前                                                                                                                                            | 可以用 git merge --no-verify 绕过                         |
| prepare-commit-msg    | git commit 执行后编辑器打开之前执行                                                                                                                         |                                                           |
| pre-rebase            | git rebase 执行前                                                                                                                                           |                                                           |
| post-checkout         | git checkout 或 git switch 执行后                                                                                                                           | 如果不使用--no-checkout 参数，则在 git clone 后也会被调用 |
| post-merge            | git commit 执行后                                                                                                                                           | 执行 git pull 也会调用                                    |
| pre-push              | git push 执行前                                                                                                                                             |                                                           |
| pre-receive           | git-receive-pack 执行前                                                                                                                                     |                                                           |
| update                |                                                                                                                                                             |                                                           |
| post-receive          | git-receive-pack 执行后                                                                                                                                     | 不影响 git-receive-pack 结果                              |
| post-update           | 当 git-receive-pack 对 git push 做出反应并更新仓库中的引用时调用                                                                                            |                                                           |
| push-to-checkout      | 当 git-receive-pack 对 git push 做出反应并更新仓库中的引用时/当推送试图更新当前被牵出的分支且 receive.denyCurrentBranch 配置被设置成 updateInstead 时被调用 |                                                           |
| pre-auto-gc           | git gc --auto 执行前                                                                                                                                        |                                                           |
| post-rewrite          | 执行 git commit -amend 或 git rebase 时调用                                                                                                                 |                                                           |
| sendemail-validate    | git send-email 执行前                                                                                                                                       |                                                           |
| fsmonitor-watchman    | 配置 core.fsmonitor 被设置为.git/hooks/fsmonitor-watchman 或者.git/hooks/fsmonitor-watchmanv2 时被调用                                                      |                                                           |
| p4-pre-submit         | git-p4 submit 执行前被调用                                                                                                                                  | 可以用 git-p4 submit --no-verify 绕过                     |
| p4-prepare-changelist | git p4 submit 执行后 编辑器启动前                                                                                                                           | 可以用 git-p4 submit --no-verify 绕过                     |
| p4-changelist         | git p4 submit 执行并编辑完 changelist message 后执行                                                                                                        | 可以用 git-p4 submit --no-verify 绕过                     |
| p4-post-changelist    | git-p4 submit 执行后被调用                                                                                                                                  |                                                           |
| post-index-change     | 索引被写入到 read-cache.c do_write_locked_index 后被调 用                                                                                                   |                                                           |

### 强制规范 git commit 的钩子

1.  pre-commit
    1.  git commit 执行前，不接收任何参数，在获取提交日志消息并进行提交之前被调用
    2.  脚本 git commit 以非零状态退出会导致命令在创建提交之前终止。
    3.  可以用 git commit --no-verify 绕过
2.  commit-msg
    1.  git commit 执行前
    2.  用于将消息规范化为某种格式
    3.  检查消息文件后拒绝提交
    4.  可以用 git commit --no-verify 绕过

### 使用 husky+commitlint 检查提交是否符合规范

1. commitlint:用于检查提交信息
2. husky:git hooks 工具
3. npm 一定要在 7.x 以上的版本

- 安装 commitlint

1. 安装依赖：pnpm i --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
2. 创建 commitlint.config.js
3. 在 commitlint.config.js 中新增校验规则

```js
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
```

4. commitlint-config 文件要在 UTF8 规则保存，否则会报错

### husky

1. 安装 pnpm i husky@7.0.1 --save-dev
2. 创建 husky 文件夹
3.
4. 在 package.json 中写入`prepare`指令：`npm set-script prepare "husky install"`
5. 执行`npm run prepare` 命令，通过 husky 安装 git hooks
6. 添加 `commitlint`hook 到 husky 中，并添加指令：在 commit-msg 的 git hooks 中执行 `npx --no-install commitlint --edit "$1"`
   - 命令：`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`