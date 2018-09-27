import Page from './page'

class StatementsPage extends Page {
  get table () { return browser.element('#borderLayout_eGridPanel') }

  open () {
    super.open('/statements')
  }
}

export default new StatementsPage()
