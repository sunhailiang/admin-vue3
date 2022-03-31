module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['@vue/standard','plugin:vue/vue3-essential'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
  }
}
