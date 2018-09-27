import Page from './page'

class SettingsPage extends Page {
  get header () { return browser.element('span=Search') }
  get authCode () { return browser.element('.ag-cell[colid="authCode"]') }

  get searchContentListMerchant () { return browser.element('[col-id="_id"]') }
  get searchContentListEmail () { return browser.element('[col-id="email"]') }

  open () {
    super.open('/search')
  }
}

export default new SettingsPage()
