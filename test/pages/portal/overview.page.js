import Page from './page'

class overviewPage extends Page {
  get iconTeam () { return browser.element('.anticon-team') }

  open () {
    super.open('/merchant-link-overview')
  }
}

export default new overviewPage()
