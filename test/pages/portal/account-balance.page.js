import Page from './page'

class AccountBalancePage extends Page {
  get search () { return browser.element('#filter') }

  open () {
    super.open('/gift-cards-account-balance')
  }
}

export default new AccountBalancePage()
