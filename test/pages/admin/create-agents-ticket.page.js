import Page from './page'

class CreateAgentsTicketPage extends Page {
    // buttons
    get btnSubmit () { return browser.element('button=Submit') }

    // support
    get merchantInput () { return browser.element('//div[label/text()="Merchant:"]//input') }
    get merchantInputItem () { return browser.element('li=32469466 (TEST)') }
    get assignInput () { return browser.element('//div[label/text()="Assign to:"]//input') }
    get assignInputItem () { return browser.element('li=test11@test.com') }
    get subjectInput () { return browser.element('//div[label/text()="Subject:"]//div') }
    get commentTextarea () { return browser.element('//div[label/text()="Comment:"]//textarea') }
    get subjectItemAgents () { return browser.element('li=Support request NEW') }

    open () {
        super.open('/new-agent')
    }

    createAgents () {
        this.merchantInput.setValue('TEST')
        this.merchantInputItem.waitForVisible()
        this.merchantInputItem.click()
        this.assignInput.setValue('test11@test.com')
        this.assignInputItem.waitForVisible()
        this.assignInputItem.click()
        this.subjectInput.click()
        this.subjectItemAgents.click()
        this.commentTextarea.setValue('test for Agents Tickets')
        this.btnSubmit.click()
    }
}

export default new CreateAgentsTicketPage()