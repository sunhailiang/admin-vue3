export const validatePwd = ($t) => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error($t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
