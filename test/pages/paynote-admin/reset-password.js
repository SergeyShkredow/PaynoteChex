import Page from './page'

class ResetPasswordPage extends Page {
    open () {
        super.open('/reset-password')
    }
}

export default new ResetPasswordPage()