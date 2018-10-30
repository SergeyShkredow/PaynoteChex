import { expect } from 'chai'
import { reloadGiftCard } from '../../../utils/index'
import LoginPage from '../../pages/portal/login.page'
import DashboardPage from '../../pages/portal/dashboard.page'
import GiftCardPage from '../../pages/portal/vTerminal-gift-card.page'
import { TCC_GIFT_CARD, SVS_GIFT_CARD, SVS_GIFT_CARD_NOT_ACTIVE, TCC_GIFT_CARD_NOT_ACTIVE } from '../../../constants/index'

describe('Gift Card Transaction ', () => {
  before(() => {
    LoginPage.login()
    reloadGiftCard({amount: '10.00'})
  })

  afterEach(() => {
    browser.refresh()
  })

  describe('TCC Transactions ', () => {
    it.only('success SALE TCC transaction ', () => {
      // switch to TEST merchant
      DashboardPage.selectMerchant('testMerchant')
      //  go to vTerminal
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
