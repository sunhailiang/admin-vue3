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