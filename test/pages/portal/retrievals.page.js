import Page from './page'

class RetrievalsPage extends Page {
  get search () { return browser.element('#maskedcard') }
  get retrievalCode () { return browser.element('.ag-cell[colid="retrievalCode"]') }

  open () {
    super.open('/retrievals')
  }
}

export default new RetrievalsPage()
