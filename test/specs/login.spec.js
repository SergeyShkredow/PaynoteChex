import Page from '../pages/paynote-admin/page'
import LoginPage from '../pages/paynote-admin/login.page'
import SignUpPage from '../pages/paynote-admin/signUp.page'
import DashboardPage from '../pages/paynote-admin/dashboard.page'
import {USER_ADMIN_LOGIN, USER_EMAIL_PASSWORD, USER_DOCUMENT} from '../../constants'
import {assert} from 'chai'
import {ERROR_INVALID_EMAIL_OR_PASS} from '../../constants/listErrors'

const page = new Page()

describe('Login with', () => {
  before(() => {
    browser.windowHandleFullscreen()
  })

  afterEach(() => {
    browser.localStorage('DELETE')
  })

  it('correct email and password ', () => {
    LoginPage.login()
    let code = browser.getText('.alert-info').slice(-5, -1)
    LoginPage.codeAuth.setValue(code)
    browser.pause(1000)
    LoginPage.subminBtn()
    DashboardPage.leftMenu.waitForText()
  })
  it('Resend Code', () => {
    LoginPage.login()
    LoginPage.resend.click()
    LoginPage.textAuthentication.waitForVisible()
    let code = browser.getText('.alert-info').slice(-5, -1)
    LoginPage.codeAuth.setValue(code)
    LoginPage.subminBtn()
    DashboardPage.leftMenu.waitForText()
  })
  it.skip('correct email and with incorrect Password', () => {
    LoginPage.open()
    LoginPage.email.waitForVisible()
    LoginPage.email.setValue('yo25ehys.zcf@20mail.it')
    browser.pause(1000)
    LoginPage.password.setValue('testErrorPassword')
    browser.pause(1000)
    LoginPage.loginBtn()
    LoginPage.errorMessage.waitForVisible()
    let errorName = browser.getText('.alert-danger')[0]
    assert.include(errorName, ERROR_INVALID_EMAIL_OR_PASS)
    // TODO: checking  5 attempts
    // for (let k = 0; k <= 3; k++) {
    //   if (errorName){
    //     this.password.clearElement()
    //     this.password.setValue('Demo0987')
    //     this.loginButton.click()
    //     browser.pause(1000)
    //   }
    // }
  })
  it('incorrect email and incorrect password', () => {})

  it('reset password', () => {})

  it('create password', () => {})

})
