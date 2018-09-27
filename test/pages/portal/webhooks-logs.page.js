import Page from './page'

class WebhooksLogsPage extends Page {
  get table () { return browser.element('.ag-header') }

  open () {
    super.open('/webhooks')
  }
}

export default new WebhooksLogsPage()
