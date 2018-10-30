import { expect } from 'chai'
import { selectFilterDate, waitFilter } from '../../../utils/index'
import LoginPage from '../../pages/portal/login.page'
import DashboardPage from '../../pages/portal/dashboard.page'
import GiftCardPage from '../../pages/portal/vTerminal-gift-card.page'
import BatchReportPage from '../../pages/portal/batch-report.page'
import PayoutsPage from '../../pages/portal/payouts.page'
import StatementsPage from '../../pages/portal/statements.page'
import RetrievalsPage from '../../pages/portal/retrievals.page'
import RetrievalDetailsPage from '../../pages/portal/retrieval-details.page'
import DisputesPage from '../../pages/portal/disputes.page'
import DisputesDetailsPage from '../../pages/portal/disputes-details.page'
import PCIAuditPage from '../../pages/portal/pci-audit.page'
import IRSPage from '../../pages/portal/irs.page'
import OverviewPage from '../../pages/portal/overview.page'
import LinedkAccountsPage from '../../pages/portal/linedk-accounts.page'
import MerchantLinkSettingsPage from '../../pages/portal/merchant-link-settings.page'
import GiftCardTransactionPage from '../../pages/portal/gift-card-transaction.page'
import AccountBalancePage from '../../pages/portal/account-balance.page'
import WebhooksLogsPage from '../../pages/portal/webhooks-logs.page'
import WebhooksSettingsPage from '../../pages/portal/webhooks-settings.page'
import vTerminalPage from '../../pages/portal/vTerminal-credits'
import CapitalPage from '../../pages/portal/capital.page'
import SupportPage from '../../pages/portal/support.page'
import SettingsPage from '../../pages/portal/settings.page'
import APIKeyPage from '../../pages/portal/api-keys.page'
import EventLogsPage from '../../pages/portal/event-logs.page'
import SearchPage from '../../pages/portal/search.page'
import BatchDetailsPage from '../../pages/portal/batch-details.page'

describe('Common ', () => {
  before(() => {
    browser.windowHandleFullscreen()
    LoginPage.login()
    DashboardPage.selectMerchant('ticksmartsMerchant')
  })

  afterEach(() => {
    DashboardPage.open()
    DashboardPage.reportsMenu.waitForEnabled()
  })

  describe('All screens are available ', () => {
    it('Batch Report page', () => {
      DashboardPage.selectMerchant('ticksmartsMerchant')
      DashboardPage.reportsMenu.waitForVisible()
      DashboardPage.reportsMenu.click()
      DashboardPage.batchReportMenu.waitForExist()
      browser.pause(200)
      DashboardPage.batchReportMenu.click()
      browser.refresh()
      BatchReportPage.search.waitForVisible()
      expect(browser.isExisting(BatchReportPage.search.selector)).to.equal(true)
    })

    it('Payouts page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.payoutsMenu.waitForVisible()
      DashboardPage.payoutsMenu.click()
      browser.refresh()
      PayoutsPage.search.waitForVisible()
      expect(browser.isExisting(PayoutsPage.search.selector)).to.equal(true)
    })

    it('Statements page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.statementsMenu.waitForVisible()
      DashboardPage.statementsMenu.click()
      browser.refresh()
      StatementsPage.table.waitForVisible()
      expect(browser.isExisting(StatementsPage.table.selector)).to.equal(true)
    })

    it('Retrievals page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.retrievalsMenu.waitForVisible()
      DashboardPage.retrievalsMenu.click()
      browser.refresh()
      RetrievalsPage.search.waitForVisible()
      expect(browser.isExisting(RetrievalsPage.search.selector)).to.equal(true)
    })

    it('Disputes page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.disputesMenu.waitForVisible()
      DashboardPage.disputesMenu.click()
      browser.refresh()
      DisputesPage.search.waitForVisible()
      expect(browser.isExisting(DisputesPage.search.selector)).to.equal(true)
    })

    it('PCI Audit page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.pciAuditMenu.waitForVisible()
      DashboardPage.pciAuditMenu.click()
      browser.refresh()
      PCIAuditPage.header.waitForVisible()
      expect(browser.isExisting(PCIAuditPage.header.selector)).to.equal(true)
    })

    it('IRS page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.irsMenu.waitForVisible()
      DashboardPage.irsMenu.click()
      browser.refresh()
      IRSPage.header.waitForVisible()
      expect(browser.isExisting(IRSPage.header.selector)).to.equal(true)
    })

    it('Merchant link overview page', () => {
      DashboardPage.merchantLink.click()
      DashboardPage.overview.waitForVisible()
      DashboardPage.overview.click()
      browser.refresh()
      OverviewPage.iconTeam.waitForVisible()
      expect(browser.isExisting(OverviewPage.iconTeam.selector)).to.equal(true)
    })

    it('Linked Accounts page', () => {
      DashboardPage.merchantLink.click()
      DashboardPage.linkedAccounts.waitForVisible()
      DashboardPage.linkedAccounts.click()
      browser.refresh()
      LinedkAccountsPage.header.waitForVisible()
      expect(browser.isExisting(LinedkAccountsPage.header.selector)).to.equal(true)
    })

    it('Merchant link settings page', () => {
      DashboardPage.merchantLink.click()
      DashboardPage.merchantLinkSettings.waitForVisible()
      DashboardPage.merchantLinkSettings.click()
      browser.refresh()
      MerchantLinkSettingsPage.header.waitForVisible()
      expect(browser.isExisting(MerchantLinkSettingsPage.header.selector)).to.equal(true)
    })

    it('Gift Card Transaction page', () => {
      DashboardPage.giftCards.click()
      DashboardPage.transactions.waitForVisible()
      DashboardPage.transactions.click()
      browser.refresh()
      GiftCardTransactionPage.search.waitForVisible()
      expect(browser.isExisting(GiftCardTransactionPage.search.selector)).to.equal(true)
    })

    it('Account Balance page', () => {
      DashboardPage.giftCards.click()
      DashboardPage.accountBalance.waitForVisible()
      DashboardPage.accountBalance.click()
      browser.refresh()
      AccountBalancePage.search.waitForVisible()
      expect(browser.isExisting(AccountBalancePage.search.selector)).to.equal(true)
    })

    it('Webhook Logs page', () => {
      DashboardPage.webhooks.click()
      DashboardPage.webhooksLogs.waitForVisible()
      DashboardPage.webhooksLogs.click()
      browser.refresh()
      WebhooksLogsPage.table.waitForVisible()
      expect(browser.isExisting(WebhooksLogsPage.table.selector)).to.equal(true)
    })

    it('Webhook Settings page', () => {
      DashboardPage.webhooks.click()
      DashboardPage.webhooksSettings.waitForVisible()
      DashboardPage.webhooksSettings.click()
      browser.refresh()
      WebhooksSettingsPage.header.waitForVisible()
      expect(browser.isExisting(WebhooksSettingsPage.header.selector)).to.equal(true)
    })

    it('vTerminal page', () => {
      DashboardPage.vterminal.click()
      browser.refresh()
      vTerminalPage.header.waitForVisible()
      expect(browser.isExisting(vTerminalPage.header.selector)).to.equal(true)
    })

    it('Capital page', () => {
      DashboardPage.capital.click()
      browser.refresh()
      CapitalPage.header.waitForVisible()
      expect(browser.isExisting(CapitalPage.header.selector)).to.equal(true)
    })

    it('Support page', () => {
      DashboardPage.support.click()
      browser.refresh()
      SupportPage.header.waitForVisible()
      expect(browser.isExisting(SupportPage.header.selector)).to.equal(true)
    })

      it('Settings page', () => {
      DashboardPage.settings.click()
      browser.refresh()
      SettingsPage.header.waitForVisible()
      expect(browser.isExisting(SettingsPage.header.selector)).to.equal(true)
    })

    it('API Key page', () => {
      DashboardPage.apiKeys.click()
      browser.refresh()
      APIKeyPage.label.waitForVisible()
      expect(browser.isExisting(APIKeyPage.label.selector)).to.equal(true)
    })

    it('Event logs page', () => {
      DashboardPage.eventLogs.click()
      browser.refresh()
      EventLogsPage.search.waitForVisible()
      expect(browser.isExisting(EventLogsPage.search.selector)).to.equal(true)
    })
  })

  describe('Searches ', () => {
    //TODO : Add checking for Mode: Expect Result - state: LIFE
      before(() => {
          DashboardPage.toggleMode.click()
          browser.pause(1000)
      })

    it('Search page', () => {
      DashboardPage.searchInput.setValue('021306')
      DashboardPage.searchButton.click()
      browser.refresh()
      SearchPage.authCode.waitForEnabled()
      expect(SearchPage.authCode.getText()).to.equal('021306')
    })

    it('Batch-report page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.batchReportMenu.waitForVisible()
      DashboardPage.batchReportMenu.click()
      browser.refresh()
      BatchReportPage.search.waitForVisible()
      selectFilterDate()
      BatchReportPage.search.setValue('98012241403')
      waitFilter(BatchReportPage.batchNumber.selector)
      expect(BatchReportPage.batchNumber.getText()).to.equal('98012241403')
    })

    it('Payouts report page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.payoutsMenu.waitForVisible()
      browser.pause(200)
      DashboardPage.payoutsMenu.click()
      browser.refresh()
      PayoutsPage.search.waitForVisible()
      selectFilterDate()
      PayoutsPage.search.setValue('121140210045826')
      waitFilter(PayoutsPage.traceNumber.selector)
      expect(PayoutsPage.traceNumber.getText()).to.equal('121140210045826')
    })

    it('Retrievals report page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.retrievalsMenu.waitForVisible()
      browser.pause(200)
      DashboardPage.retrievalsMenu.click()
      browser.refresh()
      RetrievalsPage.search.waitForVisible()
      selectFilterDate()
      RetrievalsPage.search.setValue('063')
      waitFilter(RetrievalsPage.retrievalCode.selector)
      expect(RetrievalsPage.retrievalCode.getText()).to.equal('063')
    })

    it('Disputes report page', () => {
      DashboardPage.reportsMenu.click()
      DashboardPage.disputesMenu.waitForVisible()
      browser.pause(200)
      DashboardPage.disputesMenu.click()
      browser.refresh()
      DisputesPage.search.waitForVisible()
      selectFilterDate()
      DisputesPage.search.setValue('4855')
      waitFilter(DisputesPage.cbCode.selector)
      expect(DisputesPage.cbCode.getText()).to.equal('4855')
    })
  })

  describe('Common tests ', () => {
    // TODO uncomment when bug(https://trello.com/c/vBQU650s/1434-not-always-the-popup-with-card-details-is-open-after-the-first-click) will be fixed
    it.skip('Test bin list returns a response', () => {
      BatchDetailsPage.open('58eb9b0134fa2241f0fa1673')
      browser.refresh()
      BatchDetailsPage.header.waitForText()
      BatchDetailsPage.transType.waitForEnabled()
      BatchDetailsPage.transType.click()
      // browser.refresh()
      // BatchDetailsPage.header.waitForText()
      // BatchDetailsPage.transType.waitForEnabled()
      // BatchDetailsPage.transType.click()
      BatchDetailsPage.open('58eb9b0134fa2241f0fa1673')
      browser.refresh()
      BatchDetailsPage.header.waitForText()
      BatchDetailsPage.transType.waitForEnabled()
      BatchDetailsPage.transType.click()
      BatchDetailsPage.binListModal.waitForVisible()
      const fourBinListValues = browser.getText(BatchDetailsPage.binListValues.selector).slice(0, 4)
      fourBinListValues.forEach((val) => {
        expect(val).to.not.equal('')
      })
    })

    // it('i respond to a disputes and email notification is sent', () => {
    //   browser.url('disputes/498894125400267/CHK_01C9XWSYD32NWBCTPGF689R4YC')
    //   browser.refresh()
    //   DisputesDetailsPage.header.waitForVisible()
    //   DisputesDetailsPage.noteTextArea.setValue(`AutoTest ${new Date()}`)
    //   DisputesDetailsPage.submitButton.click()
    //   DisputesDetailsPage.waitForNoteCreate()
    // })

    it('i respond to a retrieval and email notification is sent', () => {
      browser.url('retrievals-details/498894125400267/RTL_01C5NH27K3M0K2BJT84Q62HV7X')
      browser.refresh()
      RetrievalDetailsPage.header.waitForVisible()
      DisputesDetailsPage.noteTextArea.setValue(`AutoTest ${new Date()}`)
      DisputesDetailsPage.submitButton.click()
      DisputesDetailsPage.waitForNoteCreate()
    })
  })
})
