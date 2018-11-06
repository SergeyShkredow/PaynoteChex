import Page from './page'
import { USER_PHONE, USER_EMAIL_PASSWORD, USER_TEST_EMAIL, USER_RETRY, USER_DOCUMENT } from '../../../constants/index'
import DashboardPage from './dashboard.page'

class SignUpPage extends Page {
  get header () { return browser.element('.auth-header') }
  get fullName () { return browser.element('input[name="name"]') }
  get email () { return browser.element('input[name="email"]') }
  get phone () { return browser.element('input[name="phone"]') }
  get password () { return browser.element('input[name="password"]') }
  get confirmPass () { return browser.element('input[name="cpassword"]') }
  get chbox () { return browser.element('input[type="checkbox"]') }

  get loginBtn () { return browser.element('button=Login') }
  get signUpBtn () { return browser.element('button=Sign Up') }
  get errorMessage () { return browser.element('div[type=error] p') }
  get formVerification () { return browser.element('span=Please enter Access Verification Code') }

  open () {
    super.open('sign-up')
    this.header.waitForText()
  }

  signUp () {
    this.signUpBtn.click()
  }
  create (USER_DOCUMENT) {
    this.fullName.setValue(USER_DOCUMENT)
    this.email.setValue(USER_TEST_EMAIL)
    this.phone.setValue(USER_PHONE)
    this.password.setValue(USER_EMAIL_PASSWORD)
    this.confirmPass.setValue(USER_EMAIL_PASSWORD)
    this.chbox.click()
      browser.pause(5000)
  }
}

export default new SignUpPage()
