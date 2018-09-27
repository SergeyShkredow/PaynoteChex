import Page from './page'

class CapitalPage extends Page {
  get header () { return browser.element('//h2/span[contains(text(),"Capital")]') }

  open () {
    super.open('/capital')
  }
}

export default new CapitalPage()
