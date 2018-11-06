import Page from './page'

class DashboardPage extends Page {
  open () {
    super.open('/transactions')
  }
}

export default new DashboardPage()
