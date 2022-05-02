const blackList = ['/404', '/401', '/login']
export const isTag = (path) => {
  return !blackList.includes(path)
}
