import Page from './page'

class DashboardPage extends Page {
  // LEFT MENU
  get leftMenu () { return browser.element('.main-menu') }
  get adminsMenu () { return browser.element('a[href="/admins"]') }
  get transactionsMenu () { return browser.element('a[href="/transactions"]') }
  get MerchantsMenu () { return browser.element('a[href="/merchants"]') }
  get emailMenu () { return browser.element('.has-sub-menu') }
  get emailTemplateMenu () { return browser.element('a[href="/mail-template"]') }
  get emailHistoryMenu () { return browser.element('a[href="/mail-storage"]') }
  get messagesMenu () { return browser.element('a[href="/messages"]') }
  get plansMenu () { return browser.element('a[href="/plans"]') }
  get fundingSourcesMenu () { return browser.element('a[href="/funding-sources"]') }
  get subscriptionsInvoiceMenu () { return browser.element('a[href="/subscription"]') }
  get campaignStatisticsMenu () { return browser.element('a[href="/campaign-statistic"]') }
  get webhooksMenu () { return browser.element('a[href="/webhooks"]') }
  get emailLog () { return browser.element('a[href="/email-log"]') }
  get settingsMenu () { return browser.element('span=Settings') }
  get blockListMenu () { return browser.element('a[href="/settings"]') }

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
