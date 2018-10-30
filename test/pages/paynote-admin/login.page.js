import { USER_ADMIN_LOGIN, USER_EMAIL_PASSWORD } from '../../../constants/index'
import { ERROR_INVALID_EMAIL_OR_PASS } from '../../../constants/listErrors'
import { assert } from 'chai'
import Page from './page'

class LoginPage extends Page {
  get header () { return browser.element('.auth-header') }
  get email () { return browser.element('input[name="username"]') }
  get password () { return browser.element('input[name="password"]') }
  get loginButton () { return browser.element('button') }
  get submit () { return browser.element('button=Submit') }
  get resend () { return browser.element('button=Resend Code') }
  get codeAuth () { return browser.element('input[name="pinCode"]') }
  get errorMessage () { return browser.element('div[type=error] p') }
  get formAuthentication () { return browser.element('h4=Multi-factor Authentication') }
  get textAuthentication () { return browser.element('.alert-info') }

  open () {
    super.open('login')
    this.header.waitForText()
  }

  loginBtn () {
    this.loginButton.click()
  }

  subminBtn () {
    this.submit.click()
  }

  login ({ email = USER_ADMIN_LOGIN, password = USER_EMAIL_PASSWORD } = {}) {
    this.open()
    this.email.waitForVisible()
    this.email.setValue(email)
    browser.pause(1000)
    this.password.setValue(password)
    browser.pause(1000)
    this.loginBtn()
    this.formAuthentication.waitForVisible()
    let code = browser.getText('.alert-info').slice(-5, -1)
    this.codeAuth.setValue(code)
    this.subminBtn()
  }

  loginWithResend ({ email = USER_ADMIN_LOGIN, password = USER_EMAIL_PASSWORD } = {}) {
    this.open()
    this.email.waitForVisible()
    this.email.setValue(email)
    browser.pause(1000)
    this.password.setValue(password)
    browser.pause(1000)
    this.loginBtn()
    this.textAuthentication.waitForVisible()
    this.resend.click()
    this.textAuthentication.waitForVisible()
    let code = browser.getText('.alert-info').slice(-5, -1)
    this.codeAuth.setValue(code)
    this.subminBtn()
  }
  invalidPass ( { email = USER_ADMIN_LOGIN, error = ERROR_INVALID_EMAIL_OR_PASS } = {}) {
    this.open()
    this.email.waitForVisible()
    this.email.setValue(email)
    browser.pause(1000)
    this.password.setValue('testErrorPassword')
    browser.pause(1000)
    this.loginBtn()
    let errorName = browser.getText('.alert-danger')[0]
      console.log(errorName)
      // browser.debug()
    // assert.equal(error, errorName)
  }
}
export default new LoginPage()
