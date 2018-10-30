import Page from './page'

class MessagesPage extends Page {
    open () {
        super.open('/messages')
    }
}

export default new MessagesPage()