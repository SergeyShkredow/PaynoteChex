import Page from './page'

class WebhooksSettingPage extends Page {
  get header () { return browser.element('span=Webhook Settings') }

  open () {
    super.open('/webhooks-endpoints')
  }
}

export default new WebhooksSettingPage()
