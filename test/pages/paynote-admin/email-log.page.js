import Page from './page'

class EmailLogPage extends Page {
    open () {
        super.open('/email-log')
    }
}

export default new EmailLogPage()