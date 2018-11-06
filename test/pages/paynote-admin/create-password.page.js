import Page from './page'

class CreatePasswordPage extends Page {
    open () {
        super.open('/create-password')
    }
}

export default new CreatePasswordPage()