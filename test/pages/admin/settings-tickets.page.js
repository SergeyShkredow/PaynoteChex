import Page from './page'
import {scrollToElement, waitForHidden} from "../../../utils";

class SettingsTicketsPage extends Page {

  get arraySubject () { return browser.element('.ag-cell[col-id="name"]') }
  // scroll
  get scrollObject () { return browser.element('.ag-floating-bottom') }
  get scrollObjectUpper () { return browser.element('.ant-row-flex-start') }

  // buttons
  get buttonAddSubject () { return browser.element('button=Add Subject') }
  get btnModalYes () { return browser.element('button=Yes') }
  get btnModalClose () { return browser.element('button=Close') }
  get btnModalCreate () { return browser.element('button=Create') }
  get btnModalSave () { return browser.element('button=Save') }
  get btnDeleteNewTiket () { return browser.element('//div[text()="Support request 96"]//parent::div//button[2]') }
  get btnChange () { return browser.element('//div[text()="Support request 96"]//parent::div//button[1]') }

  // modal
  get modalSubject () { return browser.element('.ant-modal-content') }
  get modalFieldTypeInput () { return browser.element('//div[label/text()="Type:"]//div') }
  get modalFieldTypeItem () { return browser.element('li=Portal') }
  get modalFieldTypeItemAdmin () { return browser.element('li=Admin') }
  get modalFieldSubject () { return browser.element('//div[label/text()="Subject:"]//input') }
  get modalFieldDepartmentItput () { return browser.element('//div[label/text()="Departments:"]//div') }
  get modalFieldDepartmentItem () { return browser.element('li=Sales') }
  get modalFieldDepartmentItemNext () { return browser.element('li=Others sales New1') }
  get modalDeleteDepartmentItem () { return browser.element('//li[div="Others sales New1"]//span') }

  // modal Error
  get modalError () { return browser.element('.ant-confirm-content') }

  open () {
    super.open('/tickets')
  }

  addBind () {
      this.btnChange.click()
      this.modalSubject.waitForVisible()
      this.modalFieldDepartmentItput.click()
      this.modalFieldDepartmentItemNext.waitForVisible()
      this.modalFieldDepartmentItemNext.click()
      this.modalFieldSubject.click()
      browser.pause(500)
      this.btnModalSave.click()
  }

  remoteBind () {
      this.buttonAddSubject.waitForVisible()
      scrollToElement(this.scrollObject)
      this.btnChange.click()
      this.modalSubject.waitForVisible()
      this.modalDeleteDepartmentItem.click()
      this.modalFieldSubject.click()
      browser.pause(500)
      this.btnModalSave.click()
      waitForHidden()
  }

  addSubjectPortal () {
      let index = Math.floor(Math.random()*(99 - 5)+5)
      this.modalSubject.waitForVisible()
      this.modalFieldTypeInput.click()
      this.modalFieldTypeItem.click()
      this.modalFieldSubject.setValue('Support request' + ' ' + index)
      this.modalFieldDepartmentItput.click()
      this.modalFieldDepartmentItem.click()
      this.modalFieldSubject.click()
      this.btnModalCreate.click()
  }

  addSubjectAdmin () {
      this.modalSubject.waitForVisible()
      this.modalFieldTypeInput.click()
      this.modalFieldTypeItemAdmin.click()
      this.modalFieldSubject.setValue('Support request NEW')
      this.modalFieldDepartmentItput.click()
      this.modalFieldDepartmentItem.click()
      this.modalFieldSubject.click()
      this.btnModalCreate.click()
  }

  removeTicket () {
      this.btnDeleteNewTiket.waitForVisible()
      this.btnDeleteNewTiket.click()
      this.btnModalYes.waitForVisible()
      this.btnModalYes.click()
      this.modalError.waitForVisible()
  }
}

export default new SettingsTicketsPage()
