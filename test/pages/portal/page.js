export default class Page {
  // COMMON SELECTORS
  // date picker
  get datePicker () { return browser.element('[placeholder="Start date"]') }
  get datePickerLastYearButton () { return browser.element('.ant-calendar-prev-year-btn') }
  get datePickerFromDate () {
    return browser.element('.ant-calendar-range-part.ant-calendar-range-left .ant-calendar-date')
  }
  get datePickerToDate () {
    return browser.element('.ant-calendar-range-part.ant-calendar-range-right .ant-calendar-date')
  }
  // export
  get emailButton () { return browser.element('.dataTable-control-row .anticon.anticon-mail') }
  get typeDropdown () { return browser.element('.ant-select-selection__placeholder') }
  get typePDFValue () { return browser.element('li=PDF') }
  get typeCSVValue () { return browser.element('li=CSV') }
  get exportButton () { return browser.element('span=Export') }

  open (path) {
    browser.url(path)
  }

  isVisible (el) {
    return browser.isVisible(el.selector)
  }
}
