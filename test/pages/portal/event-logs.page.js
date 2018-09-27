import Page from './page'

class EventLogsPage extends Page {
  get search () { return browser.element('#custom') }

  open () {
    super.open('/event-logs')
  }
}

export default new EventLogsPage()
