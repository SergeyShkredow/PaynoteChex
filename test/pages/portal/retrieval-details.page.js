import Page from './page'

class RetrievalDetailsPage extends Page {
  get header () { return browser.element('span=Retrieval Details') }
}

export default new RetrievalDetailsPage()
