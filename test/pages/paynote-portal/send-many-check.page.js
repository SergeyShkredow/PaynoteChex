import Page from './page'

class SendManyCheckPage extends Page {
    open () {
        super.open('/send-money-csv')
    }
}

export default new SendManyCheckPage()