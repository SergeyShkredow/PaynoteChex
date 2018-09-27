import Page from './page'

class RiskRetrievalsPage extends Page {
  // get ghostButtonOfFirstOfficeUser() { return browser.element('.fa.fa-external-link') }

  get searchRiskRetrievals () { return browser.element('.ant-input.ant-input-lg') }
  get searchRiskRetrievalsItem () { return browser.element('.ag-group-value[ref="eValue"]') }

  open () {
    super.open('/retrievals')
  }
}

export default new RiskRetrievalsPage()
