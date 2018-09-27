import Page from './page'
import { expect } from 'chai'
import {waitFilter, waitForHidden} from "../../../utils";

class DepartmentsPage extends Page {
  // buttons
  get buttonAddDepartmets () { return browser.element('button=Add Department') }
  get buttonModalCreate () { return browser.element('button=Create') }
  get buttonDelete () { return browser.element('.fa.fa-times') }
  get buttonYes () { return browser.element('button=Yes') }
  get btnModalAlert () { return browser.element('.ant-confirm-content') }
  get btnModalClose () { return browser.element('button=Close') }

  // modal
  get nameInput () { return browser.element('//div[label/text()="Name:"]//input') }
  get modalConfig () { return browser.element('.ant-modal-content') }

  get searchDepartmentsItem () { return browser.element('.ag-cell[col-id="name"]') }
  get searchDepartments () { return browser.element('.ant-input.ant-input-lg') }

  open () {
    super.open('/departments')
  }

  addDepartment () {
      this.buttonAddDepartmets.waitForVisible()
      this.buttonAddDepartmets.click()
      this.nameInput.setValue('Others sales New1')
      this.buttonModalCreate.click()
      waitForHidden()
  }
  removeDepartment () {
      this.buttonDelete.click()
      this.buttonYes.waitForVisible()
      this.buttonYes.click()
  }

  searchItem () {
      this.searchDepartments.waitForVisible()
      this.searchDepartments.setValue('Others sales New1')
      waitFilter(this.searchDepartmentsItem.selector)
      expect(this.searchDepartmentsItem.getText()).to.equal('Others sales New1')
  }

}

export default new DepartmentsPage()
