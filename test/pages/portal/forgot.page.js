import Page from './page'
import DashboardPage from './dashboard.page'
import { USER_EMAIL_PORTAL, USER_PASS } from '../../../constants/index'

class ForgotPage extends Page {
  // Elements on Forgot Password page
  get email () { return browser.element('#email') }
  get nextButton () { return browser.element('button') }
  get header () { return browser.element('span=Reset your password') }
  get frame () { return browser.element('iframe[role="presentation"]') }

  // Elements on Reset Password page
  get resetHeader () { return browser.element('span=Reset password') }
  get confirmationMessage () { return browser.element('span=Your password has been changed successfully') }
  get password () { return browser.element('#password') }
  get confirmPassword () { return browser.element('#password_confirm') }

  open () {
    super.open('/forgot-password')
  }

  submit () {
    this.nextButton.waitForEnabled()
    this.nextButton.click()
  }
}

export default new ForgotPage()
