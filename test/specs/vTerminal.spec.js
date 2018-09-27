import { expect } from 'chai'
import { reloadGiftCard } from '../../utils'
import LoginPage from '../pages/portal/login.page'
import DashboardPage from '../pages/portal/dashboard.page'
import GiftCardPage from '../pages/portal/vTerminal-gift-card.page'
import ChargePage from '../pages/portal/vTerminal-credit.page'
import AchPage from '../pages/portal/vTerminal-ach.page'
import { TCC_GIFT_CARD, SVS_GIFT_CARD, SVS_GIFT_CARD_NOT_ACTIVE, TCC_GIFT_CARD_NOT_ACTIVE, PSP_CARD_INVALID } from '../../constants'
const credstash = require('../../utils/credstash')

const tranData = JSON.parse(credstash.auto_test_data)

describe('vTerminal Transactions ', () => {
  before(() => {
    LoginPage.login()
    reloadGiftCard({amount: '10.00'})
  })

  afterEach(() => {
    browser.refresh()
  })

  describe('Credit Transactions ', () => {
    it('success transaction ', () => {
      // switch to BCAP merchant
      DashboardPage.selectMerchant('bcapMerchant')
      // go to vTerminal
      GiftCardPage.open()
      GiftCardPage.tabs.waitForVisible()
      GiftCardPage.chargeTab.click()
      ChargePage.makeTransaction(tranData)
      expect(ChargePage.successModal.isVisible()).to.equal(true)
    })

    it('validate invalid fields ', () => {
      const invalidTranData = {
        cardNumber: PSP_CARD_INVALID,
        expDate: '0203',
        cvv: '223',
        email: 'dd@',
        billingZip: '1',
        invalidData: true
      }
      // switch to BCAP merchant
      DashboardPage.selectMerchant('bcapMerchant')
      // go to vTerminal
      GiftCardPage.open()
      GiftCardPage.tabs.waitForVisible()
      GiftCardPage.chargeTab.click()
      ChargePage.makeTransaction(invalidTranData)
      // verify fields validation
      browser.waitForEnabled('.has-error #seamlesspay-exp-date')
      const expDateValidationError = browser.element('.has-error #seamlesspay-exp-date')
      const cardNumberValidationError = browser.element('.has-error #seamlesspay-account-number')
      const billingZipValidationError = browser.element('.has-error #seamlesspay-billing-zip')
      const emailValidationError = browser.element('.has-error #seamlesspay-email')
      expect(expDateValidationError.isEnabled()).to.equal(true)
      expect(cardNumberValidationError.isEnabled()).to.equal(true)
      expect(billingZipValidationError.isEnabled()).to.equal(true)
      expect(emailValidationError.isEnabled()).to.equal(true)
    })
  })

  describe('ACH Transactions ', () => {
    it.only('success ACH transaction ', () => {
      const tranData = {
        cardNumber: PSP_CARD_INVALID,
        routingNumber: '02034234'
      }
      // switch to BCAP merchant
      DashboardPage.selectMerchant('bcapMerchant')
      // go to vTerminal
      GiftCardPage.open()
      GiftCardPage.tabs.waitForVisible()
      GiftCardPage.achTab.click()
      AchPage.makeTransaction(tranData)
      expect(AchPage.errorModal.isVisible()).to.equal(true)
    })
  })

  describe('Gift Card Transactions ', () => {
    describe('TCC Transactions ', () => {
      it('success SALE TCC transaction ', () => {
        // switch to TEST merchant
        DashboardPage.selectMerchant('testMerchant')
        // go to vTerminal
        GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for TCC GC
        GiftCardPage.saleTransaction({amount: '1', cardNumber: TCC_GIFT_CARD})
        // verify if transaction id present on the modal window
        expect(GiftCardPage.getTransactionId).to.include('TXN_')
      })

      it('success VOID of SALE TCC transaction ', () => {
        let transactionId = ''

        // switch to TEST merchant
        DashboardPage.selectMerchant('testMerchant')
        // open GC tab
        //  GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for TCC GC
        GiftCardPage.saleTransaction({amount: '1', cardNumber: TCC_GIFT_CARD})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // cancel created transaction
        GiftCardPage.voidTransaction(transactionId)
        //  verify if transaction canceled successfully
        expect(GiftCardPage.isVisible(GiftCardPage.successModal)).to.equal(true)
      })

      it('success REFUND TCC transaction ', () => {
        let transactionId = ''
        const amount = '1'

        // switch to TEST merchant
        DashboardPage.selectMerchant('testMerchant')
        // open GC tab
        //  GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for TCC GC
        GiftCardPage.saleTransaction({cardNumber: TCC_GIFT_CARD, amount})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // refund created transaction
        GiftCardPage.refundTransaction({transactionId, amount})
        //  verify if transaction canceled successfully
        expect(GiftCardPage.isVisible(GiftCardPage.successModal)).to.equal(true)
      })

      it('success VOID of REFUND TCC transaction ', () => {
        let transactionId = ''
        const amount = '1'

        // switch to TEST merchant
        DashboardPage.selectMerchant('testMerchant')
        // open GC tab
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for TCC GC
        GiftCardPage.saleTransaction({cardNumber: TCC_GIFT_CARD, amount})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // refund created transaction
        GiftCardPage.refundTransaction({transactionId, amount})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // cancel refunded transaction
        GiftCardPage.voidTransaction(transactionId)
        //  verify if transaction canceled successfully
        expect(GiftCardPage.isVisible(GiftCardPage.successModal)).to.equal(true)
      })

      it('fail SALE TCC transaction ', () => {
        // switch to TEST merchant
        DashboardPage.selectMerchant('testMerchant')
        //  go to vTerminal
        GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for TCC GC
        GiftCardPage.saleTransaction({amount: '11', cardNumber: TCC_GIFT_CARD_NOT_ACTIVE})
        // verify if transaction id present on the modal window
        expect(GiftCardPage.isVisible(GiftCardPage.errorModal)).to.equal(true)
      })
    })

    describe('SVS Transactions ', () => {
      it('success SALE SVS transaction ', () => {
        // switch to SALIDO merchant
        DashboardPage.selectMerchant('salidoMerchant')
        //  go to vTerminal
        GiftCardPage.open() //  TODO delete when bug related to switch merchant on vTerminal page (invalid token) will be fixed
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for SVS GC
        GiftCardPage.saleTransaction({amount: '1', cardNumber: SVS_GIFT_CARD})
        // verify if transaction id present on the modal window
        expect(GiftCardPage.getTransactionId).to.include('TXN_')
      })

      it('success VOID of SALE SVS transaction ', () => {
        let transactionId = ''

        // switch to SALIDO merchant
        DashboardPage.selectMerchant('salidoMerchant')
        //  go to vTerminal
        GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for SVS GC
        GiftCardPage.saleTransaction({amount: '1', cardNumber: SVS_GIFT_CARD})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // cancel created transaction
        GiftCardPage.voidTransaction(transactionId)
        //  verify if transaction canceled successfully
        expect(GiftCardPage.isVisible(GiftCardPage.successModal)).to.equal(true)
      })

      it('success REFUND SVS transaction ', () => {
        let transactionId = ''
        const amount = '1'

        // switch to SALIDO merchant
        DashboardPage.selectMerchant('salidoMerchant')
        // open GC tab
        GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for SVS GC
        GiftCardPage.saleTransaction({cardNumber: SVS_GIFT_CARD, amount})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // refund created transaction
        GiftCardPage.refundTransaction({transactionId, amount})
        //  verify if transaction canceled successfully
        expect(GiftCardPage.isVisible(GiftCardPage.successModal)).to.equal(true)
      })

      it('success VOID of REFUND SVS transaction ', () => {
        let transactionId = ''
        const amount = '1'

        // switch to SALIDO merchant
        DashboardPage.selectMerchant('salidoMerchant')
        // open GC tab
        GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for SVS GC
        GiftCardPage.saleTransaction({cardNumber: SVS_GIFT_CARD, amount})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // refund created transaction
        GiftCardPage.refundTransaction({transactionId, amount})
        // get transactionId from the modal window
        transactionId = GiftCardPage.getTransactionId
        // close modal window
        GiftCardPage.completeButton.click()
        // cancel refunded transaction
        GiftCardPage.voidTransaction(transactionId)
        //  verify if transaction canceled successfully
        expect(GiftCardPage.isVisible(GiftCardPage.successModal)).to.equal(true)
      })

      it('fail SALE SVS transaction ', () => {
        // switch to SALIDO merchant
        DashboardPage.selectMerchant('salidoMerchant')
        //  go to vTerminal
        GiftCardPage.open()
        GiftCardPage.tabs.waitForVisible()
        GiftCardPage.giftCardTab.click()
        // create SALE transaction for SVS GC
        GiftCardPage.saleTransaction({amount: '11', cardNumber: SVS_GIFT_CARD_NOT_ACTIVE})
        // verify if transaction id present on the modal window
        expect(GiftCardPage.isVisible(GiftCardPage.errorModal)).to.equal(true)
      })
    })
  })
})
