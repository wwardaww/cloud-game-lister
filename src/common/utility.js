import browser from 'webextension-polyfill'

const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

/**
 * Injects style file to head tag
 * @param {string} filePath
 */
const injectStyleFile = filePath => {
  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.type = 'text/css'
  style.href = browser.extension.getURL(filePath)
  document.head.append(style)
}

export { injectStyleFile, delay }
