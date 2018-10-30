import Page from './page'

class SubscriptionPage extends Page {
    open () {
        super.open('/subscription')
    }
}

export default new SubscriptionPage()