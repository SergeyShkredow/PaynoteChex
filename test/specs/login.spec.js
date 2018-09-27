import { expect } from 'chai'
import { createTestEmail } from '../../utils'
import LoginPage from '../pages/portal/login.page'
import DashboardPage from '../pages/portal/dashboard.page'
import SignUp from '../pages/portal/sign-up.page'
import { USER_EMAIL_PORTAL, USER_PASS } from '../../constants'

describe('Sign in/Sign up ', () => {
  afterEach(() => {
    browser.localStorage('DELETE')
  })

  it('success login', () => {
    LoginPage.open()
    LoginPage.email.waitForVisible()
    LoginPage.email.setValue(USER_EMAIL_PORTAL)
    LoginPage.password.setValue(USER_PASS)
    LoginPage.submit()
    DashboardPage.leftMenu.waitForText()
    expect(DashboardPage.breadcrumb.getText()).to.contain('Dashboard')
    DashboardPage.signOut()
  })

  it('success login after enter a wrong password', () => {
    LoginPage.open()
    // login with wrong password
    LoginPage.email.waitForVisible()
    LoginPage.email.setValue(USER_EMAIL_PORTAL)
    LoginPage.password.setValue('password')
    LoginPage.submit()
    LoginPage.errorMessage.waitForText()
    // again login with correct password
    LoginPage.email.setValue(USER_EMAIL_PORTAL)
    LoginPage.password.setValue(USER_PASS)
    LoginPage.submit()
    DashboardPage.leftMenu.waitForText()
    expect(DashboardPage.breadcrumb.getText()).to.contain('Dashboard')
    DashboardPage.signOut()
  })

  it('success sign up', () => {
    const email = createTestEmail()

    SignUp.open()
    SignUp.email.setValue(email)
    SignUp.password.setValue(USER_PASS)
    SignUp.passwordConfirm.setValue(USER_PASS)
    SignUp.firstName.setValue('test')
    SignUp.lastName.setValue('test')
    SignUp.phone.setValue('123456789')
    SignUp.submit()
    browser.waitForVisible('#tmpCode')
    expect(browser.getText('h1 span')).to.contain('Please enter Access Verification Code')
  })

  it('fail sign up - User already exists', () => {
    SignUp.open()
    SignUp.email.setValue(USER_EMAIL_PORTAL)
    SignUp.password.setValue(USER_PASS)
    SignUp.passwordConfirm.setValue(USER_PASS)
    SignUp.firstName.setValue('test')
    SignUp.lastName.setValue('test')
    SignUp.phone.setValue('123456789')
    SignUp.submit()
    SignUp.errorMessage.waitForText()
    expect(SignUp.errorMessage.getText()).to.contain('User already exists')
  })
})
