import Page from './page'
import DashboardPage from './dashboard.page'
import { USER_EMAIL_ADMIN, USER_EMAIL_PASS } from '../../../constants'

class SignUp extends Page {
    get header () { return browser.element('span=Login') }
    get email () { return browser.element('#email') }
    get password () { return browser.element('#password') }
    get loginButton () { return browser.element('button') }
    get errorMessage () { return browser.element('div[type=error] p') }
    get formVerification () { return browser.element('span=Please enter Access Verification Code') }

    get buttonSeamplessMerchants () { return browser.element('span=Seamless') }
    get buttonLogOutMerchants () { return browser.element('button=Sign Out') }
    get modalMerchants () { return browser.element('.ant-modal-content') }
    get buttonModalLogOutYesMerchants () { return browser.element('button=Yes') }

    open () {
        super.open('sign-up')
        this.header.waitForText()
    }

    submit () {
        this.loginButton.click()
    }

}

export default new SignUp()
