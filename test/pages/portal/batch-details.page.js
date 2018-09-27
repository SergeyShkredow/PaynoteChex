import Page from './page'

class BatchDetailsPage extends Page {
  get header () { return browser.element('span=Batch Details') }
  get transType () { return browser.element('.ag-cell[colid="cardBrand"] a img') }

  // BIN LIST MODAL VIEW
  get binListModal () { return browser.element('#rcDialogTitle0') }
  get binListValues () { return browser.elements('.ant-modal-body tr td:nth-child(2)') }

  open (tranId) {
    super.open(`/batch-details/${tranId}`)
  }
}

export default new BatchDetailsPage()
