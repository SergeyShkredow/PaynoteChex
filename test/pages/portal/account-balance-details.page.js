import Page from './page'

class AccountBalanceDetailsPage extends Page {
  get cardNumber () { return browser.element('.ag-cell[colid="cardNumber"]') }

  open (cardNumber) {
    super.open(`/gift-cards/details?cardNumber=${cardNumber}`)
  }
}

export default new AccountBalanceDetailsPage()
