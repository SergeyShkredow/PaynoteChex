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
  get invitationsMenu () { return browser.element('a[href="/invitations"]') }
  get plansMenu () { return browser.element('a[href="/plans"]') }
  get fundingSourcesMenu () { return browser.element('a[href="/funding-sources"]') }
  get subscriptionsInvoiceMenu () { return browser.element('a[href="/subscription"]') }
  get campaignStatisticsMenu () { return browser.element('a[href="/campaign-statistic"]') }
  get webhooksMenu () { return browser.element('a[href="/webhooks"]') }
  get emailLogMenu () { return browser.element('a[href="/email-log"]') }

  open () {
    super.open('https://dev-paynote.seamlesschex.com/merchants')
    browser.pause(300)
  }
}

export default new DashboardPage()
