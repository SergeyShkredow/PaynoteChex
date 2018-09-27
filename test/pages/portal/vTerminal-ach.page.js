import Page from './page'
import { TRANTYPE_SAVINGS, SEC_CODE_TEL, FAIL_CARDS } from '../../../constants/index'
import { getFrame } from '../../../utils/index'

class vTerminalAch extends Page {
  get typeFrame () { return browser.element('#seamlesspay-hosted-field-bankAccountType') }
  get switchToTypeFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-bankAccountType')) }
  get type () { return browser.element('#bank-account-type') }

  get achTypeFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-achType')) }
  get achType () { return browser.element('#ach-type') }

  get routingNumberFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-routingNumber')) }
  get routingNumber () { return browser.element('#routing-number') }

  get cardNumberFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-accountNumber')) }
  get cardNumber () { return browser.element('#account-number') }

  get amountFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-amount')) }
  get amount () { return browser.element('#amount') }

  // get switchToExpDateFrame() { return browser.frame(getFrame('#seamlesspay-hosted-field-expDate')) }
  // get expDate() { return browser.element('#exp-date') }
  //
  // get switchToCvvFrame() { return browser.frame(getFrame('#seamlesspay-hosted-field-cvv')) }
  // get cvv() { return browser.element('#cvv') }
  //
  // get switchToBillingZipFrame() { return browser.frame(getFrame('#seamlesspay-hosted-field-billingZip')) }
  // get billingZip() { return browser.element('#billingZip') }
  //
  // get switchToEmailFrame() { return browser.frame(getFrame('#seamlesspay-hosted-field-email')) }
  // get email() { return browser.element('#email') }

  get successModal () { return browser.element('.ant-modal.ant-confirm.ant-confirm-success') }
  get errorModal () { return browser.element('.ant-modal.ant-confirm.ant-confirm-error') }

  get processButton () { return browser.element('.ant-btn.ant-btn-primary') }

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

  selectAchTranType (type) {
    this.switchFrame('achTypeFrame')
    this.achType.waitForEnabled()
    this.achType.selectByValue(type)
  }

  makeTransaction ({tranType = TRANTYPE_SAVINGS, achTranType = SEC_CODE_TEL, invalidData = false, ...data}) {
    const testData = {amount: 0.01, ...data}
    console.log('testData: ', testData)
    this.selectTranType(tranType)
    this.selectAchTranType(achTranType)
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

export default new vTerminalAch()
