import Page from './page'
import {scrollToElement, waitForHidden} from "../../../utils";

class CreateTicketPage extends Page {

  // buttons
  get submitBtn () { return browser.element('button=Submit') }

  // support
  get merchantInput () { return browser.element('//div[label/text()="Merchant:"]//input') }
  get merchantInputItem () { return browser.element('li=470752536900657 (SINGER22)') }
  get merchantInputItemTest () { return browser.element('li=32469466 (TEST)') }
  get assignInput () { return browser.element('//div[label/text()="Assign to:"]//input') }
  get assignInputItem () { return browser.element('li=testhq@testq.com') }
  get subjectInput () { return browser.element('//div[label/text()="Subject:"]//div') }
  get commentTextarea () { return browser.element('//div[label/text()="Comment:"]//textarea') }
  get scrollObject () { return browser.element('li=Other') }
  get subjectItem () { return browser.element('li=Support request 96') }

  open () {
    super.open('/new-merchant')
  }

  createTickets () {
      this.merchantInput.setValue('TEST')
      this.merchantInputItemTest.waitForVisible()
      this.merchantInputItemTest.click()
      this.assignInput.setValue('testhq@testq.com')
      this.assignInputItem.waitForVisible()
      this.assignInputItem.click()
      this.subjectInput.click()
      this.subjectItem.click()
      this.commentTextarea.setValue('test for Merchants Tickets')
      this.submitBtn.click()
  }

  createSupport () {
      this.merchantInput.setValue('470752536900657')
      this.merchantInputItem.waitForVisible()
      this.merchantInputItem.click()
      this.assignInput.setValue('testhq@testq.com')
      this.assignInputItem.waitForVisible()
      this.assignInputItem.click()
      this.subjectInput.click()
      scrollToElement(this.scrollObject)
      this.subjectInput.waitForVisible()
      this.subjectItem.click()
      this.commentTextarea.setValue('test for singer22')
      this.submitBtn.click()
  }
}

export default new CreateTicketPage()
