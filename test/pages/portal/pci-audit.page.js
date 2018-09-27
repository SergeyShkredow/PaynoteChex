import Page from './page'

class pciAuditPage extends Page {
  get header () { return browser.element('span=PCI Audit') }

  open () {
    super.open('/pci-audit')
  }
}

export default new pciAuditPage()
