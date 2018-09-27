import Page from './page'

class vTerminalCredit extends Page {
  get header () { return browser.element('span=Virtual Terminal') }
  get tabs () { return browser.element('div=CHARGE') }

  open () {
    super.open('/vterminal')
  }
}

export default new vTerminalCredit()
