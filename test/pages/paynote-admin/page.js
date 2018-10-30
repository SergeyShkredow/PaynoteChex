export default class Page {
  open (path = '') {
    browser.url(`https://dev-paynote.seamlesschex.com/${path}`)
  }

  isVisible (el) {
    return browser.isVisible(el.selector)
  }
}
