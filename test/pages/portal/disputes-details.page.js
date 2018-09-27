import Page from './page'

class DisputesDetailsPage extends Page {
  get header () { return browser.element('span=Disputes Details') }
  get noteTextArea () { return browser.element('textarea') }
  get submitButton () { return browser.element('span=Submit') }
  get notes () { return browser.elements('.ant-card.ant-card-bordered.ant-card-wider-padding') }

  waitForNoteCreate () {
    const notesBeforeCreate = this.notes.value.length
    return browser.waitUntil(() => (notesBeforeCreate < $$(this.notes.selector).length), 10000)
  }
}

export default new DisputesDetailsPage()
