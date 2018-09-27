import Page from './page'

class RiskDisputesPage extends Page {
  // get ghostButtonOfFirstOfficeUser() { return browser.element('.fa.fa-external-link') }

  get searchRiskDisputes () { return browser.element('.ant-input.ant-input-lg') }
  get searchRiskDisputesItem () { return browser.element('.ag-group-value[ref="eValue"]') }

  open () {
    super.open('/disputes')
  }
}

export default new RiskDisputesPage()
