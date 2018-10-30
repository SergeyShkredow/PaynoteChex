import Page from './page'

class CampaignStatisticsPage extends Page {
    open () {
        super.open('/campaign-statistic')
    }
}

export default new CampaignStatisticsPage()