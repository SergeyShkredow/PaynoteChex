import Page from './page'
import {waitForHidden} from "../../../utils";
import { expect } from 'chai'
import { assert } from 'chai'

class SearchPage extends Page {

  // search content
  get searchLabel () { return browser.element('h2=Search') }
  get tableAdmin () { return browser.element('h3=Admin Offices') }
  get tableMerchantManagement () { return browser.element('h3=Merchant Management') }
  get tableMerchantUser () { return browser.element('h3=Merchant Users') }
  get tableOfficeUsers () { return browser.element('h3=Office Users') }
  get resField () { return browser.element('//div[text()="test111@test.com"]//preceding::div[@col-id="lastName"]')
  }

  // buttons
  get btnAddTo () { return browser.element('//div[h3/text()="Merchant Management"]//button[span="Add To"]') }

  // checkbox
  get checkboxMerchantManagement () { return browser.element('//div[h3/text()="Merchant Management"]//div[text()="32469466"]//preceding::div[1]') }

  // pagination
  get blockAdmin () { return browser.element('//div[h3/text()="Admin Offices"]//ul') }
  get blockMerchantManagement () { return browser.element('//div[h3/text()="Merchant Management"]//ul') }
  get blockMerchantUsers () { return browser.element('//div[h3/text()="Merchant Users"]//ul') }
  get blockOfficeUsers () { return browser.element('//div[h3/text()="Office Users"]//ul') }
  get clickLinkMerchantManagement () { return browser.element('//div[h3/text()="Merchant Management"]//ul/li[a="2"]') }
  get clickLinkMerchantUser () { return browser.element('//div[h3/text()="Merchant Users"]//ul/li[a="2"]') }
  get linkPaginationManagement () { return browser.element('//div[h3/text()="Merchant Management"]//ul/li[@class="ant-pagination-total-text"]') }
  get linkPaginationUsers () { return browser.element('//div[h3/text()="Merchant Users"]//ul/li[@class="ant-pagination-total-text"]') }

  // ghost
  get ghostChangeAdmin () { return browser.element('//div[text()="Office1"]//parent::div//button[1]') }
  get ghostDeleteAdmin () { return browser.element('//div[text()="Office1"]//parent::div//button[2]') }
  get ghostchangeMerchantUsers () { return browser.element('//div[text()="test111@test.com"]//parent::div//button[1]') }
  get ghostLockedOfficeUser () { return browser.element('//div[text()="test11"]//parent::div/div[@col-id="locked"]') }
  get ghostChangeOfficeUser () { return browser.element('//div[text()="test11"]//parent::div//button[1]') }

  // modal buttons and content
  get btnSubmit () { return browser.element('button=Submit') }
  get modalWindowContent () { return browser.element('.ant-modal-content') }
  get modalLastNameInputOfficeUser () { return browser.element('//div[label/text()="Last Name:"]//input') }
  get modalLastNameInputMerchantUsers () { return browser.element('//div[label/text()="Last Name:"]//input') }
  get btnCancel () { return browser.element('button[aria-label="Close"]') }

  // scroll
  get scrollMerchantManagement () { return browser.element('//div[h3/text()="Merchant Management"]//div[@class="ag-floating-bottom"]') }
  get scrollMerchantUser () { return browser.element('//div[h3/text()="Merchant Users"]//div[@class="ag-floating-bottom"]') }
  get scrollOfficeUsers () { return browser.element('//div[h3/text()="Office Users"]//div[@class="ag-floating-bottom"]') }


  open () {
    super.open('/search')
  }

  editMerchantUser () {
      this.ghostchangeMerchantUsers.waitForVisible()
      this.ghostchangeMerchantUsers.click()
      this.modalWindowContent.waitForVisible()
      this.modalLastNameInputMerchantUsers.clearElement()
      this.modalLastNameInputMerchantUsers.setValue('New')
      this.btnSubmit.click()
  }

  checkOfficeUser () {
      this.ghostDeleteAdmin.waitForVisible()
      this.ghostChangeAdmin.waitForVisible()
      this.ghostChangeAdmin.click()
      this.modalWindowContent.waitForVisible()
      this.modalLastNameInputOfficeUser.clearElement()
      this.modalLastNameInputOfficeUser.setValue('Office002')
      this.btnSubmit.click()
      waitForHidden()
      this.ghostChangeAdmin.click()
  }

  checkBlocks () {
      this.ghostLockedOfficeUser.click()
      this.ghostLockedOfficeUser.click()
      this.ghostChangeOfficeUser.click()
      this.modalWindowContent.waitForVisible()
      this.modalLastNameInputOfficeUser.clearElement()
      this.modalLastNameInputOfficeUser.setValue('Office1')
      this.btnSubmit.click()
      waitForHidden()
  }
  isVisibility() {
      expect(this.tableAdmin.isVisible()).to.equal(true)
      expect(this.tableMerchantManagement.isVisible()).to.equal(true)
      expect(this.tableMerchantUser.isVisible()).to.equal(true)
      expect(this.tableOfficeUsers.isVisible()).to.equal(true)
      expect(this.blockAdmin.isVisible()).to.equal(true)
      expect(this.blockMerchantManagement.isVisible()).to.equal(true)
      expect(this.blockMerchantUsers.isVisible()).to.equal(true)
      expect(this.blockOfficeUsers.isVisible()).to.equal(true)
  }

}

export default new SearchPage()
