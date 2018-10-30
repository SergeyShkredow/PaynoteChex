import Page from './page'

class EmailHistoryPage extends Page {
    open () {
        super.open('/mail-storage')
    }
}

export default new EmailHistoryPage()