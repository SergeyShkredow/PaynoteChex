import Page from './page'

class EmailTemplatePage extends Page {
    open () {
        super.open('/mail-template')
    }
}

export default new EmailTemplatePage()