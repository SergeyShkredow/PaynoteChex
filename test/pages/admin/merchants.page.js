import Page from './page'
import { expect } from 'chai'
import {waitFilter, waitForHidden} from "../../../utils";

class MerchantsPage extends Page {

  get ghostButtonOfFirstMerchant () { return browser.element('.fa.fa-external-link') }
  get scrollBorderLayout () { return browser.element('#borderLayout_eRootPanel') }

  //modal
  get modalManagementMerchants () { return browser.element('[aria-labelledby="rcDialogTitle0"]') }
  get modalMerchantsUnassign () { return browser.element('.ant-modal-content') }

  // search
  get searchContentListMerchants () { return browser.element('[col-id="_id"]') }
  get contentMerchants () { return browser.element('#borderLayout_eRootPanel') }
  get searchMerchants () { return browser.element('.ant-input.ant-input-lg') }
  get searchMerchantItem () { return browser.element('.ag-cell[col-id="businessInformation.entityName"]') }
  get searchModalMerchantUser () { return browser.element('.ant-input.ant-select-search__field') }
  get resultSearchModalMerchantUser () { return browser.element('li=seamlesspaytest@gmail.com') }

  // fields
  get modalFieldUnassign () { return browser.element('//form/div[2]') }
  get modalSelectUnassign () { return browser.element('li=seamlesspaytest@gmail.com') }

  // checkbox
  get checkboxFirstMerchants () { return browser.element('//div[text()="SINGER22"]//parent::div/div/span') }

  // button
  get btnAddMerchant () { return browser.element('button=Add Merchant') }
  get buttonAddToMerchants () { return browser.element('button=Add To') }
  get buttonUnassideMerchants () { return browser.element('button=Unassign') }
  get buttonModalAssignMerchants () { return browser.element('button=Assign') }
  // get buttonModalLogOutYesMerchants () { return browser.element('button=Yes') }
  get buttonModalUnassign () { return browser.element('//div[@class="ant-modal-footer"]/button[2]') }
  get buttonPenMerchants () { return browser.element('.fa.fa-pencil-square-o') }

  // scroll
  get statusItemMerchants () { return browser.element('.ag-cell[col-id="status"]') }
  get openDataItemMerchants () { return browser.element('.ag-cell[col-id="openDate"]') }
  get typeItemMerchants () { return browser.element('.ag-cell[col-id="merchantType"]') }


  open () {
    super.open('/merchantmangement')
  }

  createMerchant () {
      this.btnAddMerchant.click()
  }

  assignMerchant () {
      this.searchMerchants.setValue('SINGER22')
      waitFilter(this.searchMerchantItem.selector)
      expect(this.searchMerchantItem.getText()).to.equal('SINGER22')
      this.checkboxFirstMerchants.click()
      this.buttonAddToMerchants.click()
      this.modalManagementMerchants.waitForVisible()
      this.searchModalMerchantUser.setValue('seamlesspaytest@gmail.com')
      this.resultSearchModalMerchantUser.waitForVisible()
      this.resultSearchModalMerchantUser.click()
      this.buttonModalAssignMerchants.click()
      waitForHidden()
  }

  unassignMerchant () {
      this.searchMerchants.setValue('SINGER22')
      waitFilter(this.searchMerchantItem.selector)
      expect(this.searchMerchantItem.getText()).to.equal('SINGER22')
      browser.pause(1000)
      this.checkboxFirstMerchants.click()
      browser.pause(500)
      this.buttonUnassideMerchants.click()
      this.modalMerchantsUnassign.waitForVisible()
      this.modalFieldUnassign.click()
      this.modalSelectUnassign.waitForVisible()
      this.modalSelectUnassign.click()
      this.buttonModalUnassign.click()
      waitForHidden()
  }
}

export default new MerchantsPage()
