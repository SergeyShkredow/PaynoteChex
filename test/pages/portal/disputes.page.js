import Page from './page'

class DisputesPage extends Page {
  get search () { return browser.element('#maskedcard') }
  get cbCode () { return browser.element('.ag-cell[colid="cbCode"]') }

  open () {
    super.open('/disputes')
  }
}

export default new DisputesPage()
