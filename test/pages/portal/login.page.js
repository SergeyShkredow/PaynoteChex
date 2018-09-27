import Page from './page'
import DashboardPage from './dashboard.page'
import TwoFactorAuthenticationPage from './two-factor-authentication.page'
import { USER_EMAIL_PORTAL, USER_PASS } from '../../../constants/index'

class LoginPage extends Page {
  get header () { return browser.element('span=Login') }
  get email () { return browser.element('#email') }
  get password () { return browser.element('#password') }
  get loginButton () { return browser.element('button') }
  get errorMessage () { return browser.element('p[type=error]') }
  get forgotPassword () { return browser.element('a[href="/forgot-password"]') }
  get formVerification () { return browser.element('span=Please enter Access Verification Code') }

  open () {
    super.open('/login')
    this.header.waitForText()
  }

  submit () {
    this.loginButton.click()
  }

  login ({ element, email = USER_EMAIL_PORTAL, password = USER_PASS} = {}) {
    this.open()
    this.email.setValue(email)
    this.password.setValue(password)
    this.submit()
    const pageAfterLogin = browser.waitUntil(() => {
      const tfa = this.isVisible(TwoFactorAuthenticationPage.verificationCode)
      const dashboard = this.isVisible(DashboardPage.breadcrumb)
      if (tfa)
        return 'tfa'
      if (dashboard)
        return 'dashboard'
    }, 10000)
    if (pageAfterLogin === 'tfa' && !element)
      TwoFactorAuthenticationPage.loginWithTFA(email)
    element ? browser.waitForVisible(element) : DashboardPage.leftMenu.waitForText()
  }
  // for test locking
  loginMerchant ({ element, email = 'test23@test.com', password = '123456!'} = {}) {
    this.open()
    this.email.setValue(email)
    this.password.setValue(password)
    this.submit()
  }
}

export default new LoginPage()
