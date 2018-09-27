import Page from './page'
import DashboardPage from './dashboard.page'
import { getTwoFactorAuthorizationCode } from '../../../utils/mail'

class TwoFactorAuthorizationPage extends Page {
  get verificationCode () { return browser.element('#tmpCode') }
  get privateRadioBtn () { return browser.element('.ant-radio-group label:last-child input') }
  get nextButton () { return browser.element('.ant-btn.ant-btn-primary') }
  get wrongCodeError () { return browser.element('p=Invalid Verification Code') }

  loginWithTFA (email) {
    // wait for email with 2fa code
    browser.pause(6000)
    // get 2fa code from email
    const code = browser.call(getTwoFactorAuthorizationCode(email))
    console.log('----code----: ', code)
    this.privateRadioBtn.click()
    this.verificationCode.setValue(code)
    this.nextButton.click()
    DashboardPage.leftMenu.waitForText()
  }
}

export default new TwoFactorAuthorizationPage()
