import Page from './page'

class TicketsAgentsPage extends Page {
  get countAgents () { return browser.element('.ant-pagination-total-text') }

    // buttons
  get btnCreate () { return browser.element('a=Create Ticket') }
    // search field
  get searchField () { return browser.element('.ant-input') }

  get searchTicketsAgents () { return browser.element('.ant-input.ant-input-lg') }
  get searchTicketsAgentsItem () { return browser.element('.ag-cell[col-id="ticketNumber"]') }


  open () {
    super.open('/support-agent')
  }
}

export default new TicketsAgentsPage()
