import Page from './page'

class AdminsPage extends Page {
    open () {
        super.open('/admins')
    }
}

export default new AdminsPage()