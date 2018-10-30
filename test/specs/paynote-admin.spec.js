// import { expect, assert } from 'chai'
// import { waitFilter, selectFilterDate, scrollToElement, waitForHidden } from '../../../utils/index'
import Page from '../pages/paynote-admin/page'
import LoginPage from '../pages/paynote-admin/login.page'
import SignUp from '../pages/paynote-admin/signUp.page'

const page = new Page()

describe('Admin', () => {
  before(() => {
    browser.windowHandleFullscreen()
  })

  afterEach(() => {
    browser.localStorage('DELETE')
  })

  it('success login', () => {
    LoginPage.open()
  })
})
