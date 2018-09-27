import Page from './page'

class SignUpPage extends Page {
  get firstName () { return browser.element('#firstName') }
  get lastName () { return browser.element('#lastName') }
  get phone () { return browser.element('#phone') }
  get email () { return browser.element('#email') }
  get password () { return browser.element('#password') }
  get passwordConfirm () { return browser.element('#password_confirm') }
  get signUpButton () { return browser.element('button') }
  get errorMessage () { return browser.element('p[type=error]') }

  open () {
    super.open('/signup')
  }

  submit () {
    this.signUpButton.click()
  }
}

export default new SignUpPage()
