import Page from './page'

class MerchantLinkSettingsPage extends Page {
  get header () { return browser.element('span=MerchantLink Settings') }

  open () {
    super.open('/merchant-link-settings')
  }
}

export default new MerchantLinkSettingsPage()
