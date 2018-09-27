import Page from './page'

class LinkedAccountsPage extends Page {
  get header () { return browser.element('span=Linked Accounts') }

  open () {
    super.open('/merchant-link-accounts')
  }
}

export default new LinkedAccountsPage()
