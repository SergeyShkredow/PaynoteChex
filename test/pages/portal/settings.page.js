import Page from './page'

class SettingsPage extends Page {
  get header () { return browser.element('span=Settings') }

  open () {
    super.open('/settings')
  }
}

export default new SettingsPage()
