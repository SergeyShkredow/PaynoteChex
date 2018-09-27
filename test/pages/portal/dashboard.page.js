import Page from './page'
import LoginPage from './login.page'
import { scrollToElement } from '../../../utils/index'

class DashboardPage extends Page {
  get breadcrumb () { return browser.element('.ant-breadcrumb-link span') }

  // TOP MENU
  get topMenu () { return browser.element('i.anticon.anticon-user') }
  // merchants
  get testMerchant () { return browser.element('.menu-button') }
  // get testMerchant () { return browser.element('.menu-button.test') }
  get salidoMerchant () { return browser.element('.menu-button.salido') }
  get ticksmartsMerchant () { return browser.element('.menu-button.ticksmarts\\.com') }
  get artnewsMerchant () { return browser.element('.menu-button.artnews') }
  // sign out
  get signOutBtn () { return browser.element('span=Sign Out') }
  //Toggle mode
  get toggleMode () { return browser.element('.custom-switch') }

  // LEFT MENU
  get leftMenu () { return browser.element('.ant-menu') }
  get reportsMenu () { return browser.element('[aria-owns="reports$Menu"]') }
  get batchReportMenu () { return browser.element('#batch') }
  get payoutsMenu () { return browser.element('#payouts') }
  get statementsMenu () { return browser.element('#statements') }
  get retrievalsMenu () { return browser.element('#retrievals') }
  get disputesMenu () { return browser.element('#disputes') }
  get pciAuditMenu () { return browser.element('#pci-audit') }
  get irsMenu () { return browser.element('#irs') }
  get merchantLink () { return browser.element('[aria-owns="merchant-link$Menu"]') }
  get overview () { return browser.element('#merchant-link-overview') }
  get linkedAccounts () { return browser.element('#merchant-link-accounts') }
  get merchantLinkSettings () { return browser.element('#merchant-link-settings') }
  get giftCards () { return browser.element('[aria-owns="gift-cards$Menu"]') }
  get transactions () { return browser.element('#gift-card-transactions') }
  get accountBalance () { return browser.element('#gift-cards-balance') }
  get webhooks () { return browser.element('[aria-owns="webhooks$Menu"]') }
  get webhooksLogs () { return browser.element('#webhooks-logs') }
  get webhooksSettings () { return browser.element('#webhooks-endpoints') }
  get vterminal () { return browser.element('#vterminal') }
  get capital () { return browser.element('#capital') }
  get support () { return browser.element('#support') }
  get settings () { return browser.element('#settings') }
  get apiKeys () { return browser.element('#api-keys') }
  get eventLogs () { return browser.element('#event-logs') }

  // LOGOUT MODAL
  get logoutModal () { return browser.element('.ant-modal-content') }
  get forgetMe () { return browser.element('.ant-checkbox-input') }
  get logoutBtn () { return browser.element('.ant-modal-content .ant-btn-primary') }

  // SEARCH
  get searchInput () { return browser.element('.ant-menu-item .ant-input') }
  get searchButton () { return browser.element('.anticon.anticon-search') }

  open () {
    super.open('/')
    browser.pause(300)
  }

  signOut (isForgot) {
    this.topMenu.click()
    this.signOutBtn.waitForVisible()
    this.signOutBtn.click()
    this.forgetMe.waitForEnabled()
    browser.pause(300)
    if (isForgot)
      this.forgetMe.click()
    this.logoutBtn.click()
    LoginPage.header.waitForText()
  }

  selectMerchant (name) {
    this.topMenu.click()
    this.testMerchant.waitForVisible()
    const merchant = this[name]
    // scroll to element
    scrollToElement(merchant)
    // select a merchant
    merchant.click()
    browser.pause(1500)
  }
}

export default new DashboardPage()
