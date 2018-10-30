import Page from './page'

class RequrringPage extends Page {
    open () {
        super.open('/recurring')
    }
}

export default new RequrringPage()