import Page from './page'

class BatchReportPage extends Page {
  get search () { return browser.element('#locbxbth') }
  get datePicker () { return browser.element('[placeholder="Start date"]') }
  get datePickerLastYearButton () { return browser.element('.ant-calendar-prev-year-btn') }
  get datePickerFromDate () {
    return browser.element('.ant-calendar-range-part.ant-calendar-range-left .ant-calendar-date')
  }
  get datePickerToDate () {
    return browser.element('.ant-calendar-range-part.ant-calendar-range-right .ant-calendar-date')
  }
  get batchNumber () { return browser.element('.ag-cell[colid="batchNumber"]') }

  open () {
    super.open('/batch')
  }
}

export default new BatchReportPage()
