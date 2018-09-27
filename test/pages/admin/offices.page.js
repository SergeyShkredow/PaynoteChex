import Page from './page'
import {waitForHidden} from "../../../utils";

class OfficesPage extends Page {
  // get ghostButtonOfFirstOfficeUser() { return browser.element('.fa.fa-external-link') }

  // search
  get searchOffices () { return browser.element('.ant-input.ant-input-lg') }
  get searchName () { return browser.element('.ag-cell[col-id="name"]') }

  // buttons
  get buttonAddOffice () { return browser.element('button=Add Office') }
  get buttonDelete () { return browser.element('.fa.fa-times') }
  get modalSubmit () { return browser.element('//div[@class="ant-modal-footer"]//button[2]') }
  get modalYes () { return browser.element('button=Yes') }

  // modal window for add new Office

  get modalAdminOffice () { return browser.element('.ant-modal-wrap[aria-labelledby="rcDialogTitle0"]') }
  get modalConfirm () { return browser.element('.ant-modal-content') }
  get nameInputOffice () { return browser.element('//div[label/text()="Name"]//input') }
  get contactInputOffice () { return browser.element('//div[label/text()="Contact"]//input') }
  get phoneInputOffice () { return browser.element('//div[label/text()="Phone"]//input') }
  get emailInputOffice () { return browser.element('//div[label/text()="Email"]//input') }
  get hqOfficeInput () { return browser.element('//div[label/text()="HQ Office"]//div') }
  get hqOfficeInputItem () { return browser.element('li=No') }

  open () {
    super.open('/offices')
  }

  addOffice () {
      this.buttonAddOffice.click()
      this.modalAdminOffice.waitForVisible()
      this.nameInputOffice.setValue('Test Office111')
      this.contactInputOffice.setValue('contact1')
      this.phoneInputOffice.setValue('(001)-121-12-12')
      this.emailInputOffice.setValue('something@gmail.com')
      this.hqOfficeInput.click()
      this.hqOfficeInputItem.click()
      this.modalSubmit.click()
      waitForHidden()
  }
}

export default new OfficesPage()
