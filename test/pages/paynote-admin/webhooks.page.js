import Page from './page'

class WebhooksPage extends Page {
    open () {
        super.open('/webhooks')
    }
}

export default new WebhooksPage()