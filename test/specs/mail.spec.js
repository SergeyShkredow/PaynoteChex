import { expect } from 'chai'
import { getTwoFactorAuthorizationCode, getForgotPasswordLink, verifyExportEmail } from '../../utils/mail'
import { sendExportEmail, selectFilterDate } from '../../utils'
import LoginPage from '../pages/portal/login.page'
import TwoFactorAuthenticationPage from '../pages/portal/two-factor-authentication.page'
import DashboardPage from '../pages/portal/dashboard.page'
import ForgotPage from '../pages/portal/forgot.page'
import Page from '../pages/portal/page'
import BatchReportPage from '../pages/portal/batch-report.page'
import BatchDetailsPage from '../pages/portal/batch-details.page'
import RetrievalsPage from '../pages/portal/retrievals.page'
import ChargebacksPage from '../pages/portal/disputes.page'
import GiftCardTransactionPage from '../pages/portal/gift-card-transaction.page'
import AccountBalanceDetailsPage from '../pages/portal/account-balance-details.page'
import ExportEmailModalPage from '../pages/admin/modals.page'

import { FORGOT_USER_EMAIL_PORTAL } from '../../constants'
const page = new Page()

describe('Email tests(2fa, Exports, Forgot Password) ', () => {
  it('login with 2fa code', () => {
    LoginPage.login()
    // FORGET ME (to get 2fa code)
    DashboardPage.signOut(true)
    LoginPage.login({element: TwoFactorAuthenticationPage.verificationCode.selector})
    // verify error if wrong 2fa code
    TwoFactorAuthenticationPage.verificationCode.setValue('11111')
    TwoFactorAuthenticationPage.nextButton.click()
    TwoFactorAuthenticationPage.wrongCodeError.waitForText()
    // wait for email with 2fa code
    browser.pause(6000)
    // get 2fa code from email
    const code = browser.call(getTwoFactorAuthorizationCode())
    TwoFactorAuthenticationPage.privateRadioBtn.click()
    TwoFactorAuthenticationPage.verificationCode.setValue(code)
    TwoFactorAuthenticationPage.nextButton.click()
    DashboardPage.leftMenu.waitForText()
    expect(DashboardPage.breadcrumb.getText()).to.contain('Dashboard')
  })

  it('forgot password', () => {
    browser.localStorage('DELETE')
    LoginPage.open()
    LoginPage.forgotPassword.click()
    ForgotPage.header.waitForText()
    ForgotPage.email.setValue(FORGOT_USER_EMAIL_PORTAL)
    ForgotPage.submit()
    // wait for email with Forgot password link
    browser.pause(6000)
    const forgotPasswordLink = browser.call(getForgotPasswordLink)
    browser.url(forgotPasswordLink)
    ForgotPage.resetHeader.waitForText()
    ForgotPage.password.setValue('123123@')
    ForgotPage.confirmPassword.setValue('123123@')
    ForgotPage.submit()
    ForgotPage.confirmationMessage.waitForText()
    LoginPage.login({email: FORGOT_USER_EMAIL_PORTAL, password: '123123@'})
    expect(DashboardPage.breadcrumb.getText()).to.contain('Dashboard')
    browser.localStorage('DELETE')
  })

  describe('Exports ', () => {
    it('batches', () => {
      LoginPage.login()
      DashboardPage.selectMerchant('ticksmartsMerchant')
      BatchReportPage.open()
      browser.pause(900)
      browser.refresh()
      BatchReportPage.search.waitForVisible()
      selectFilterDate()
      sendExportEmail('csv')
      const fileName = browser.call(verifyExportEmail)
      expect(fileName).to.equal('batch_report.csv')
    })

    it('batch details', () => {
      BatchDetailsPage.open('5922cbd42c588a0ed16d6f65')
      browser.pause(900)
      browser.refresh()
      BatchDetailsPage.header.waitForText()
      sendExportEmail('csv')
      const fileName = browser.call(verifyExportEmail)
      expect(fileName).to.equal('batch_details.csv')
    })

    it('retrievals', () => {
      RetrievalsPage.open()
      browser.pause(900)
      browser.refresh()
      RetrievalsPage.search.waitForVisible()
      selectFilterDate()
      sendExportEmail('pdf')
      const fileName = browser.call(verifyExportEmail)
      expect(fileName).to.equal('retrievals.pdf')
    })

    it('chargebacks', () => {
      ChargebacksPage.open()
      browser.refresh()
      ChargebacksPage.search.waitForVisible()
      selectFilterDate()
      sendExportEmail('csv')
      const fileName = browser.call(verifyExportEmail)
      console.log(fileName)
      expect(fileName).to.equal('chargebacks.csv')
    })

    it('gift card', () => {
      DashboardPage.selectMerchant('testMerchant')
      GiftCardTransactionPage.open()
      GiftCardTransactionPage.search.waitForVisible()
      selectFilterDate()
      sendExportEmail('pdf')
      const fileName = browser.call(verifyExportEmail)
      expect(fileName).to.equal('gift_card_transactions_report.pdf')
    })

    it('gift card transaction', () => {
      page.open('gift-card-transactions/details?groupedDate=5%2F15%2F2018')
      GiftCardTransactionPage.search.waitForVisible()
      sendExportEmail('csv')
      const fileName = browser.call(verifyExportEmail)
      expect(fileName).to.equal('transactionDetails.csv')
    })

    it('account balance', () => {
      AccountBalanceDetailsPage.open('2063025100129939')
      AccountBalanceDetailsPage.cardNumber.waitForVisible()
      sendExportEmail('pdf')
      const fileName = browser.call(verifyExportEmail)
      expect(fileName).to.equal('transactionDetails.pdf')
    })
  })
})
