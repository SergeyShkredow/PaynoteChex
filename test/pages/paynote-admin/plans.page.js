import Page from './page'

class PlansPage extends Page {
    open () {
        super.open('/plans')
    }
}

export default new PlansPage()