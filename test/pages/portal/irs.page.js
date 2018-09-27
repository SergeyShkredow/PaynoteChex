import Page from './page'

class irsPage extends Page {
  get header () { return browser.element('span=IRS Reporting') }

  open () {
    super.open('/irs')
  }
}

export default new irsPage()
