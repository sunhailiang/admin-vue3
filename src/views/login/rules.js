export const validatePwd = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码长度不低于6位'))
    } else {
      callback()
    }
  }
}
