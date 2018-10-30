import Page from './page'

class AccountPage extends Page {
    open () {
        super.open('/account')
    }
}

export default new AccountPage()