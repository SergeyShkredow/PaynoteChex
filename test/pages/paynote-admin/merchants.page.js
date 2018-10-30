import Page from './page'

class MerchantsPage extends Page {
    open () {
        super.open('/merchants')
    }
}

export default new MerchantsPage()