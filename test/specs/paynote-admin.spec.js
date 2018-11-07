import Page from '../pages/paynote-admin/page'
import LoginPage from '../pages/paynote-admin/login.page'
import DashboardPage from '../pages/paynote-admin/dashboard.page'
import SignUpPage from '../pages/paynote-admin/signUp.page'
import {USER_DOCUMENT, USER_RETRY, USER_SUSPENDED, USER_VERIFY} from '../../constants'

const page = new Page()

describe('Admin', () => {
  before(() => {
    browser.windowHandleFullscreen()
  })

  afterEach(() => {
    browser.localStorage('DELETE')
  })

  it('success login', () => {
    LoginPage.login()
    let code = browser.getText('.alert-info').slice(-5, -1)
    LoginPage.codeAuth.setValue(code)
    browser.pause(1000)
    LoginPage.subminBtn()
    DashboardPage.leftMenu.waitForText()
  })

  it('Create new Retry Merchant', () => {
    LoginPage.open()
    LoginPage.email.waitForVisible()
    LoginPage.signUpBtn.click()
    SignUpPage.header.waitForVisible()
    SignUpPage.create(USER_RETRY)
  })
  it('Create new Document Merchant', () => {
    LoginPage.open()
    LoginPage.email.waitForVisible()
    LoginPage.signUpBtn.click()
    SignUpPage.header.waitForVisible()
    SignUpPage.create(USER_DOCUMENT)
  })
  it('Create new Suspended Merchant', () => {
    LoginPage.open()
    LoginPage.email.waitForVisible()
    LoginPage.signUpBtn.click()
    SignUpPage.header.waitForVisible()
    SignUpPage.create(USER_SUSPENDED)
  })
  it('Create new Verify Merchant', () => {
    LoginPage.open()
    LoginPage.email.waitForVisible()
    LoginPage.signUpBtn.click()
    SignUpPage.header.waitForVisible()
    SignUpPage.create(USER_VERIFY)
  })
  describe('Menu', () => {
    it.only('Admins', () => {
      LoginPage.multiFactorAuth()
      DashboardPage.leftMenu.waitForVisible()
        browser.debug()
      DashboardPage.adminsMenu.click()
        browser.pause(3000)
    })
    it.only('Transactions', () => {
      LoginPage.multiFactorAuth()
      DashboardPage.leftMenu.waitForVisible()
      DashboardPage.transactionsMenu.click()
    })
    it('Merchants', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.MerchantsMenu.click()
    })
    it('Mail Templates', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.emailMenu.click()
      DashboardPage.emailTemplateMenu.click()
    })
    it('Mail History', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.emailMenu.click()
      DashboardPage.emailHistoryMenu.click()
    })
    it('Messages', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.messagesMenu.click()
    })
    it('Invitations', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.invitationsMenu.click()
    })
    it('Plans', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.plansMenu.click()
    })
    it('Funding Sources', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.fundingSourcesMenu.click()
    })
    it('Subscription', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.subscriptionsInvoiceMenu.click()
    })
    it('Campaign Statistics', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.campaignStatisticsMenu.click()
    })
    it('Webhooks List', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.webhooksMenu.click()
    })
    it('Email Log', () => {
      LoginPage.login()
      DashboardPage.leftMenu.waitForText()
      DashboardPage.emailLogMenu.click()
    })
  })
})
