import Page from './page'
import { TRANTYPE_AUTH, FAIL_CARDS } from '../../../constants/index'
import { getFrame } from '../../../utils/index'

class vTerminalCredit extends Page {
  get typeFrame () { return browser.element('#seamlesspay-hosted-field-txnMethod') }
  get switchToTypeFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-txnMethod')) }
  get type () { return browser.element('#txn-method') }

  get cardNumberFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-accountNumber')) }
  get cardNumber () { return browser.element('#account-number') }

  get amountFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-amount')) }
  get amount () { return browser.element('#amount') }

  get expDateFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-expDate')) }
  get expDate () { return browser.element('#exp-date') }

  get cvvFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-cvv')) }
  get cvv () { return browser.element('#cvv') }

  get billingZipFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-billingZip')) }
  get billingZip () { return browser.element('#billingZip') }

  get emailFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-email')) }
  get email () { return browser.element('#email') }

  get successModal () { return browser.element('.ant-modal.ant-confirm.ant-confirm-success') }
  get errorModal () { return browser.element('.ant-modal.ant-confirm.ant-confirm-error') }

  get processButton () { return browser.element('.ant-btn.ant-btn-primary') }

  get header () { return browser.element('span=Virtual Terminal') }
  switchFrame (frame) {
    browser.frame()
    this[frame]
  }

  submitForm () {
    this.switchFrame()
    this.processButton.click()
  }

  selectTranType (type) {
    this.typeFrame.waitForEnabled()
    this.switchFrame('switchToTypeFrame')
    this.type.waitForEnabled()
    this.type.selectByValue(type)
  }

  makeTransaction ({tranType = TRANTYPE_AUTH, invalidData = false, ...data}) {
    const testData = {amount: 0.01, ...data}
    this.selectTranType(tranType)
    const fillOutFields = (field) => {
      if (testData[field]) {
        this.switchFrame(`${field}Frame`)
        this[field].waitForEnabled()
        this[field].setValue(testData[field])
      }
    }
    Object.keys(testData).forEach(fillOutFields)

    this.submitForm()
    if (invalidData) return
    FAIL_CARDS.includes(testData.cardNumber) ? this.errorModal.waitForVisible() : this.successModal.waitForVisible()
  }
}

export default new vTerminalCredit()
