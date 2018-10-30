import Page from './page'

class RequestCheckPage extends Page {
    open () {
        super.open('/receive-money')
    }
}

export default new RequestCheckPage()