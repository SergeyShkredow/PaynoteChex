import { expect } from 'chai'
import { verifyExportEmail } from '../../../utils/mail'
import LoginPage from '../../pages/admin/login.page'
import DashboardPage from '../../pages/admin/dashboard.page'
import Page from '../../pages/admin/page'
import ExportEmailModalPage from "../../pages/admin/modals.page";
const page = new Page()

describe('Email tests(agent, merchant, office users, merchants, merchant users) ', () => {

    before(() => {
        browser.windowHandleFullscreen()
    })

    after(() => {
        browser.localStorage('DELETE')
    })

 describe('Exports ',  function ()  {
     this.retries(1)
    it('tickets agent ', () => {
        LoginPage.login()
        DashboardPage.leftMenu.waitForText()
        DashboardPage.ticketsMenu.click()
        browser.pause(1000)
        DashboardPage.ticketsAgents.click()
        browser.refresh()
        ExportEmailModalPage.exportEmailModal()
        const fileName = browser.call(verifyExportEmail)
        expect(fileName).to.equal('Support Agent.csv')
    })
    //TODO: don't send fail Support Merchant.csv to email
    it.skip('tickets merchant', () => {
        LoginPage.login()
        DashboardPage.leftMenu.waitForText()
        DashboardPage.ticketsMenu.click()
        browser.pause(1000)
        DashboardPage.ticketsMerchants.click()
        browser.refresh()
        ExportEmailModalPage.exportEmailModal()
        const fileName = browser.call(verifyExportEmail)
        expect(fileName).to.equal('Support Merchant.csv')
    })

    it('office users', () => {
        LoginPage.login()
        DashboardPage.leftMenu.waitForText()
        DashboardPage.officesUsersMenu.click()
        browser.pause(1000)
        DashboardPage.officeUsersMenu.click()
        browser.refresh()
        ExportEmailModalPage.exportEmailModal()
        const fileName = browser.call(verifyExportEmail)
        expect(fileName).to.equal('Office Users.csv')
    })

    it('merchants', () => {
        LoginPage.login()
        DashboardPage.leftMenu.waitForText()
        DashboardPage.merchantsUsersMenu.click()
        browser.pause(1000)
        DashboardPage.merchantsMenu.click()
        browser.refresh()
        ExportEmailModalPage.exportEmailModal()
        const fileName = browser.call(verifyExportEmail)
        expect(fileName).to.equal('merchant_management.csv')
    })

    it('merchant users', () => {
        LoginPage.login()
        DashboardPage.leftMenu.waitForText()
        DashboardPage.merchantsUsersMenu.click()
        browser.pause(1000)
        DashboardPage.merchantUsersMenuList.click()
        browser.refresh()
        ExportEmailModalPage.exportEmailModal()
        const fileName = browser.call(verifyExportEmail)
        expect(fileName).to.equal('Merchant Users.csv')
    })
 })
})