// import { expect, assert } from 'chai'
// import { waitFilter, selectFilterDate, scrollToElement, waitForHidden } from '../../../utils/index'
import Page from '../pages/paynote-admin/page'
import LoginPage from '../pages/paynote-admin/login.page'
// import SignUp from '../pages/paynote-admin/signUp.page'
import DashboardPage from '../pages/paynote-admin/dashboard.page'
import {USER_ADMIN_LOGIN, USER_EMAIL_PASSWORD} from '../../constants/index'
// import {expect} from "chai";

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
    DashboardPage.leftMenu.waitForText()
  })
  it('success login with Resend Code', () => {
    LoginPage.loginWithResend()
    DashboardPage.leftMenu.waitForText()
  })
  it.only('success email with invalid Password', () => {
    LoginPage.invalidPass()
    // DashboardPage.leftMenu.waitForText()
  })
  it('success email with invalid Verification code', () => {

    DashboardPage.leftMenu.waitForText()
  })
})
