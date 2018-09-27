import Page from './page'
import {waitForHidden} from "../../../utils";

class MerchantUsersPage extends Page {
  get ghostButtonOfFirstMerchantUser () { return browser.element('.fa.fa-external-link') }
  get searchMerchantsUserItem () { return browser.element('.ag-cell[col-id="email"]') }

  // search
  get searchListEmailMerchantUser () { return browser.element('[col-id="email"]') }
  get contentMerchantUser () { return browser.element('.ag-header-cell-label') }
  get searchMerchantUsers () { return browser.element('.ant-input.ant-input-lg') }

  //ghost status
  get statusLockMerchant () { return browser.isVisible('.ant-switch-checked') }

  // scroll
  get statusItemMerchantUsers () { return browser.element('.ag-cell[col-id="status"]') }
  get lockedItemMerchantUsers () { return browser.element('.ag-cell[col-id="locked"]') }

  // buttons
  get addMerchantUsers () { return browser.element('.ant-btn-primary.ant-btn-lg') }
  get modalSubmitMerchant () { return browser.element('button=Submit') }
  get deleteUser () { return browser.element('.fa.fa-times') }
  get modalButtonYes () { return browser.element('button=Yes') }

  // add user Merchant

  get modalMerchantUsers () { return browser.element('.ant-modal') }
  get firstNameInputMerchant () { return browser.element('//div[label/text()="First Name:"]//input') }
  get lastNameInputMerchant () { return browser.element('//div[label/text()="Last Name:"]//input') }
  get phoneInputMerchant () { return browser.element('//div[label/text()="Phone:"]//input') }
  get emailInputMerchant () { return browser.element('//div[label/text()="Email:"]//input') }

  get permissionSelectMerchant () { return browser.element('//div[label/text()="Permission status:"]//div') }
  get permissionSelectMerchantItem () { return browser.element('li=User Admin') }
  get defaultMerchantInput () { return browser.element('//div[label/text()="Default Merchant:"]//input') }
  get passwordInputMerchant () { return browser.element('//div[label/text()="Password:"]//input') }
  get confirmPasswordInputMerchant () { return browser.element('//div[label/text()="Password Confirm:"]//input') }

  // modal
  get modalCofirm () { return browser.element('.ant-modal-content') }

  // scroll
  get statusItemMerchant () { return browser.element('.ag-cell[col-id="status"]') }

  open () {
    super.open('merchant-users')
  }

  createUser () {
      this.addMerchantUsers.click()
      this.modalMerchantUsers.waitForVisible()
      this.firstNameInputMerchant.setValue('Tester Merchant')
      this.lastNameInputMerchant.setValue('User 1')
      this.phoneInputMerchant.setValue('(011)155-17-17')
      this.emailInputMerchant.setValue('userTestMerch@i.gmail.com')
      this.permissionSelectMerchant.click()
      this.permissionSelectMerchantItem.waitForEnabled()
      this.permissionSelectMerchantItem.click()
      browser.keys('\uE004')
      this.defaultMerchantInput.setValue('Rob Jobs')
      this.passwordInputMerchant.setValue('Tester123!')
      this.confirmPasswordInputMerchant.setValue('Tester123!')
      this.modalSubmitMerchant.click()
      waitForHidden()
  }

  removeUser () {
      this.statusItemMerchantUsers.click()
      browser.keys('\uE014')
      browser.keys('\uE014')
      browser.keys('\uE014')
      this.deleteUser.click()
      this.modalCofirm.waitForVisible()
      this.modalButtonYes.click()
      waitForHidden()
  }
}

export default new MerchantUsersPage()
