import Page from './page'

class TicketsMerchantsPage extends Page {

  get searchTicketsMerchants () { return browser.element('.ant-input.ant-input-lg') }
  get searchTicketsMerchantsItem () { return browser.element('.ag-cell[col-id="merchant.name"]') }
  get countMerchants () { return browser.element('.ant-pagination-total-text') }

  // buttons
  get btnCreate () { return browser.element('a=Create Ticket') }

  open () {
    super.open('/support-merchant')
  }
}

export default new TicketsMerchantsPage()
