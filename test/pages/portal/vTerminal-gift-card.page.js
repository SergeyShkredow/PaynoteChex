import Page from './page'
import { TRANTYPE_REFUND, TRANTYPE_VOID, TRANTYPE_SALE, FAIL_CARDS } from '../../../constants/index'
import { getFrame } from '../../../utils/index'

class vTerminalGiftCard extends Page {
  get tabs () { return browser.element('.ant-tabs.ant-tabs-top.ant-tabs-card') }
  get giftCardTab () { return browser.element('div=Gift Card') }

  get typeFrame () { return browser.element('#seamlesspay-hosted-field-txnMethod') }
  get switchToTypeFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-txnMethod')) }
  get type () { return browser.element('#txn-method') }

  get transactionIdFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-txnID')) }
  get transactionId () { return browser.element('#txn-id') }

  // get cardNumberFrame() { return browser.element('#seamlesspay-hosted-field-accountNumber')}
  get switchToCardNumberFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-accountNumber')) }
  get cardNumber () { return browser.element('#account-number') }

  // get amountFrame() { return browser.element('#seamlesspay-hosted-field-amount')}
  get switchToAmountFrame () { return browser.frame(getFrame('#seamlesspay-hosted-field-amount')) }
  get amount () { return browser.element('#amount') }

  get processButton () { return browser.element('.ant-btn.ant-btn-primary') }
  get completeButton () { return browser.element('span=Complete') }

  get successModal () { return browser.element('.ant-modal.ant-confirm.ant-confirm-success') }
  get errorModal () { return browser.element('.ant-modal.ant-confirm.ant-confirm-error') }
  get getTransactionId () { return browser.getText('b*=TXN_') }

  get header () { return browser.element('span=Virtual Terminal') }

  switchFrame (frame) {
    browser.frame()
    this[frame]
  }

  selectTranType (type) {
    this.typeFrame.waitForEnabled()
    this.switchFrame('switchToTypeFrame')
    this.type.waitForEnabled()
    this.type.selectByValue(type)
  }

  submitForm () {
    this.switchFrame()
    this.processButton.click()
  }

  saleTransaction ({ cardNumber, amount }) {
    // select SALE transaction type in dropdown Type
    this.selectTranType(TRANTYPE_SALE)
    // enter the card number
    this.switchFrame('switchToCardNumberFrame')
    this.cardNumber.setValue(cardNumber)
    // enter amount
    this.switchFrame('switchToAmountFrame')
    this.amount.setValue(amount)
    // submit form
    this.submitForm()
    FAIL_CARDS.includes(cardNumber) ? this.errorModal.waitForVisible() : this.successModal.waitForVisible()
  }

  voidTransaction (transactionId) {
    // select VOID transaction type in dropdown Type
    this.selectTranType(TRANTYPE_VOID)
    // enter the transactionId
    this.switchFrame('transactionIdFrame')
    this.transactionId.setValue(transactionId)
    // submit form
    this.submitForm()
    this.successModal.waitForVisible()
  }

  refundTransaction ({ transactionId, amount }) {
    this.selectTranType(TRANTYPE_REFUND)
    // enter the transactionId
    this.switchFrame('transactionIdFrame')
    this.transactionId.setValue(transactionId)
    // enter amount
    this.switchFrame('switchToAmountFrame')
    this.amount.setValue(amount)
    // submit form
    this.submitForm()
    this.successModal.waitForVisible()
  }

  open () {
    super.open('/vterminal')
  }
}

export default new vTerminalGiftCard()
