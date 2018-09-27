import Page from './page'

class APIKeysPage extends Page {
  get label () { return browser.element('span=Publishable Key') }

  open () {
    super.open('/api-keys')
  }
}

export default new APIKeysPage()
