import Page from './page'

class MerchantDetailsPage extends Page {

  get searchItemUsers () { return browser.element('.ag-cell[col-id="email"]') }
  get scrollItem () { return browser.element('.ag-cell[col-id="merchant.name"]') }
  // Features
  get featuresTab () { return browser.element('div=Features') }
  get header () { return browser.element('h2=Features') }

  // Users
  get usersTab () { return browser.element('div=Users') }

  // Features TCC
  get tccConfigurations () { return browser.elements('div[style="margin-right: 1em;"] span') }

  // Features SVS
  get svsConfigurations () { return browser.elements('div[style="margin-right: 1em;"] span') }

  open (merchantId) {
    super.open(`merchants/${merchantId}`)
  }
}

export default new MerchantDetailsPage()
