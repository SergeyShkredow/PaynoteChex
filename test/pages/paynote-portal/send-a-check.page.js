import Page from './page'

class SendCheckPage extends Page {
    open () {
        super.open('/send-money')
    }
}

export default new SendCheckPage()