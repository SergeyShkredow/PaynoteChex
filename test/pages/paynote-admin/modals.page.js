import Page from './page'
import {USER_EMAIL_PORTAL} from "../../../constants";

class ExportEmailModalPage extends Page {

    get modalContent() {return browser.element('.ant-modal-content')}
    get modalEmail() {return browser.element('#email')}
    get modalTypeInput() { return browser.element('//div[label/text()="Type"]//parent::div//span')}
    get modalTypeInputItem() {return browser.element('li=CSV')}
    get modalExportBtn() {return browser.element('button=Export')}
    get emailIcon () { return browser.element('//div[@class="ant-row"]//button[1]') }


    open() {
    }

    exportEmailModal() {
        this.emailIcon.waitForVisible()
        this.emailIcon.click()
        this.modalContent.waitForVisible()
        this.modalEmail.clearElement()
        this.modalEmail.setValue(USER_EMAIL_PORTAL)
        this.modalTypeInput.click()
        this.modalTypeInputItem.click()
        this.modalExportBtn.click()
    }


}
export default new ExportEmailModalPage()
