import Page from './page'

class DashboardPage extends Page {
  // LEFT MENU
  get leftMenu () { return browser.element('.ant-menu') }
  get merchantsUsersMenu () { return browser.element('[aria-owns="merchantsUsers$Menu"]') }
  get merchantsMenu () { return browser.element('a[href="/merchantmangement"]') }
  get merchantUsersMenuList () { return browser.element('a[href="/merchant-users"]') }
  get officesUsersMenu () { return browser.element('[aria-owns="officesUsers$Menu"]') }
  get officeUsersMenu () { return browser.element('a[href="/office-users"]') }
  get officesMenu () { return browser.element('a[href="/offices"]') }
  get officeTree () { return browser.element('a[href="/office-tree"]') }
  get ticketsMenu () { return browser.element('[aria-owns="tickets$Menu"]') }
  get ticketsAgents () { return browser.element('a[href="/support-agent"]') }
  get ticketsMerchants () { return browser.element('a[href="/support-merchant"]') }
  get risk () { return browser.element('[aria-owns="risk$Menu"]') }
  get riskRetrievals () { return browser.element('a[href="/retrievals"]') }
  get riskDisputes () { return browser.element('a[href="/disputes"]') }
  get settingsMenu () { return browser.element('[aria-owns="settings$Menu"]') }
  get settingsTickets () { return browser.element('a[href="/settings/tickets"]') }
  get departments () { return browser.element('a[href="/settings/departments"]') }

  // dashboard content
  get dashboardContent () { return browser.element('.ant-row') }

  // search field
  get searchField () { return browser.element('.ant-input') }

  // check user email
  get checkForEmail () { return browser.element('.ag-cell[col-id="email"]') }

  // link header
  get adminBtn () { return browser.element('a=Admin Panel') }
  get headerEmail () { return browser.element('//div/p[text()="test11@test.com"]') }

  open () {
    super.open('https://paynote.seamlesschex.com/')
    browser.pause(300)
  }
}

export default new DashboardPage()
