import Page from './page'

class TransactionsPage extends Page {
    open () {
        super.open('/transactions')
    }
}

export default new TransactionsPage()