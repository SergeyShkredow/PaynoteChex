import Page from './page'

class PayoutsPage extends Page {
  get search () { return browser.element('#custom') }
  get traceNumber () { return browser.element('.ag-cell[colid="traceNumber"]') }

  open () {
    super.open('/payouts')
  }
}

export default new PayoutsPage()
