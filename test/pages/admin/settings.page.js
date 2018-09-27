import Page from './page'

class SettingsPage extends Page {
  open () {
    super.open('/settings')
  }
}

export default new SettingsPage()
