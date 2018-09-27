import Page from './page'
import {waitForHidden} from "../../../utils";

class OfficeUsersPage extends Page {

  get ghostButtonOfFirstOfficeUser () { return browser.element('.fa.fa-external-link') }
  get contentModalUser () { return browser.element('.ag-grid.ag-fresh.grid-table') }

  // search
  get searchOfficeUsers () { return browser.element('.ant-input.ant-input-lg') }
  get searchOfficeUsersItem () { return browser.element('.ag-cell[col-id="email"]') }

  // ghost
  get adminPanel () { return browser.element('.fa-external-link') }

  //ghost status
    get statusLockOffice () { return browser.isVisible('.ant-switch-checked') }

  // scroll
  get lockedItemOfficeUsersPage () { return browser.element('.ag-cell[col-id="locked"]') }

  // buttons
  get addOfficeUsers () { return browser.element('.ant-btn.ant-btn-primary') }
  get modalSubmit () { return browser.element('button=Submit') }
  get deleteConfirmOfficeUserItem () { return browser.element('button=Yes') }

  // modal window

  get modalOfficeUsers () { return browser.element('.ant-modal-content') }

  // add user Office
  get firstNameInput () { return browser.element('//div[label/text()="First Name:"]//input') }
  get LastNameInput () { return browser.element('//div[label/text()="Last Name:"]//input') }
  get phoneInput () { return browser.element('//div[label/text()="Phone:"]//input') }
  get emailInput () { return browser.element('//div[label/text()="Email:"]//input') }
  get rolesSelect () { return browser.element('//div[label/text()="Roles:"]//div') }
  get rolesSelectItem () { return browser.element('li=Super ISO') }
  get officeSelect () { return browser.element('//div[label/text()="Office:"]//div') }
  get officeSelectItem () { return browser.element('li=Seamless') }
  get departmentsSelect () { return browser.element('//div[label/text()="Departments:"]//div') }
  get departmentsSelectItem () { return browser.element('li=Back Office') }
  get agentInput () { return browser.element('//div[label/text()="Agent / Manager / Office:"]//input') }
  get permissionSelect () { return browser.element('//div[label/text()="Permission status:"]//div') }
  get permissionSelectItem () { return browser.element('li=Sys Admin') }
  get viewOfficeSelect () { return browser.element('//div[label/text()="View office wide:"]//div') }
  get viewOfficeSelectItem () { return browser.element('li=Yes') }
  get passwordInput () { return browser.element('//div[label/text()="Password:"]//input') }
  get confirmPasswordInput () { return browser.element('//div[label/text()="Confirm Password:"]//input') }

  // delete element list

  get deleteListTableItemOfficeUser () { return browser.element('.fa.fa-times') }

    open () {
    super.open('/office-users')
  }

  createOfficeUser () {
      this.addOfficeUsers.click()
      this.modalOfficeUsers.waitForVisible()
      this.firstNameInput.setValue('Tester')
      this.LastNameInput.setValue('Office User')
      this.phoneInput.setValue('(011)155-13-18')
      this.emailInput.setValue('tester@gmail.com')
      this.rolesSelect.click()
      this.rolesSelectItem.waitForVisible()
      this.rolesSelectItem.click()
      this.officeSelect.click()
      this.officeSelectItem.waitForVisible()
      this.officeSelectItem.click()
      // browser.keys('\uE004')
      this.emailInput.click()
      this.departmentsSelect.click()
      this.departmentsSelectItem.waitForVisible()
      this.departmentsSelectItem.click()
      // browser.keys('\uE004')
      this.emailInput.click()
      this.agentInput.setValue('Agent')
      this.permissionSelect.click()
      this.permissionSelectItem.waitForEnabled()
      this.permissionSelectItem.click()
      // browser.keys('\uE004')
      this.emailInput.click()
      this.viewOfficeSelect.click()
      this.viewOfficeSelectItem.waitForEnabled()
      this.viewOfficeSelectItem.click()
      this.passwordInput.setValue('Tester123!')
      this.confirmPasswordInput.setValue('Tester123!')
      this.modalSubmit.click()
      waitForHidden()
  }

  removeOfficeUser () {
      this.deleteListTableItemOfficeUser.click()
      this.deleteConfirmOfficeUserItem.waitForVisible()
      this.deleteConfirmOfficeUserItem.click()
      waitForHidden()
  }
}

export default new OfficeUsersPage()
