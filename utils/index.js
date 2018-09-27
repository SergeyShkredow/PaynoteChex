import rp from 'request-promise'
import { TEST_PREFIX, SALIDO_API_KEY } from '../constants'
import Page from '../test/pages/portal/page'
const page = new Page()

const createRandomString = () =>
  Math.random().toString(36).substring(2, 15)

export const createTestEmail = () => `${TEST_PREFIX + createRandomString()}@test.com`

export const reloadGiftCard = ({cardNumber = '6006493880499923563', amount = '20.00'}) => {
  const options = {
    method: 'POST',
    uri: 'https://rc-api.seamlesspay.com/v2/transactions',
    body: {
      method: 'reload',
      type: 'GIFT',
      cardNumber,
      amount
    },
    headers: {
      'Authorization': SALIDO_API_KEY
    },
    json: true
  }

  rp(options).then((response) => {
    if(response.amount !== amount)
      throw new Error('SVS gift card is not reloaded!')
  })
}

export const scrollToElement = (objEl) => {
  const element = $$(objEl.selector)
  const scroll = (element) => element[0].scrollIntoView()
  browser.execute(scroll, element)
}

export const selectFilterDate = () => {
  page.datePicker.click()
  page.datePickerLastYearButton.waitForEnabled()
  browser.pause(200)
  page.datePickerLastYearButton.click()
  browser.pause(200)
  page.datePickerLastYearButton.click()
  page.datePickerFromDate.click()
  page.datePickerToDate.click()
  browser.pause(2000)
  if(!browser.isVisible('.ag-cell[colid="count"]')) {
    page.datePicker.click()
    page.datePickerLastYearButton.waitForEnabled()
    browser.pause(200)
    page.datePickerLastYearButton.click()
    browser.pause(200)
    page.datePickerLastYearButton.click()
    page.datePickerFromDate.click()
    page.datePickerToDate.click()
    browser.pause(2000)
  }

}

export const sendExportEmail = (type = 'pdf') => {
  page.emailButton.click()
  browser.pause(500)
  page.typeDropdown.waitForVisible()
  page.typeDropdown.click()
  page.typePDFValue.waitForVisible()
  if(type === 'pdf')
    page.typePDFValue.click()
  if(type === 'csv')
    page.typeCSVValue.click()
  page.exportButton.click()
  browser.pause(6000)
}

export const waitFilter = (el) => {
  const beforeFilter = $$(el).length
  // console.log('beforeFilter: ', beforeFilter)
  return browser.waitUntil(() => {
    // console.log('$$(el).length: ', $$(el).length)
    return beforeFilter > $$(el).length
  }, 10000)
}

export const getFrame = (selector) => $(selector).value

export const waitForHidden = () => {
    browser.waitUntil(() => {
        return browser.isVisible('.ant-modal-content') === false
    })

}

export default {
  selectFilterDate,
  createTestEmail,
  scrollToElement,
  reloadGiftCard,
  waitFilter,
  sendExportEmail,
  getFrame,
  waitForHidden
}
