export default class Page {
  open (path = '') {
    browser.url(`https://paynote.seamlesschex.com/${path}`)
  }

  isVisible (el) {
    return browser.isVisible(el.selector)
  }
}
