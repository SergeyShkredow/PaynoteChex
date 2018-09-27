import Page from './page'

class GiftCardTransactionPage extends Page {
  get search () { return browser.element('#filter') }

  open () {
    super.open('/gift-card-transactions')
  }
}

export default new GiftCardTransactionPage()
