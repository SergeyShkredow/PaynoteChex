import Page from './page'

class OfficeTreePage extends Page {
  // get ghostButtonOfFirstOfficeUser() { return browser.element('.fa.fa-external-link') }

  get searchOfficeTree () { return browser.element('.ant-input.ant-input-lg') }
  // get searchOfficeTreeItem() { return browser.element('.ag-cell[col-id="ticketNumber"]') }
  open () {
    super.open('/office-tree')
  }
}

export default new OfficeTreePage()
