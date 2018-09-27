import Page from './page'

class SupportPage extends Page {
  get header () { return browser.element('span=Create Ticket') }

  open () {
    super.open('/support')
  }
}

export default new SupportPage()
