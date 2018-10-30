import Page from './page'

class CustomersPage extends Page {
    open () {
        super.open('/customers')
    }
}

export default new CustomersPage()