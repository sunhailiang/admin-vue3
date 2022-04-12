import localStorage from './localStorage'
import sessionStorage from './sessionStorage'

/**
 *
 * @param {*} path
 * @returns
 */
const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

const registeGlobalUtils = (app) => {
  app.config.globalProperties.$utils = {
    isExternal,
    ...localStorage,
    ...sessionStorage
  }
}

export default registeGlobalUtils
