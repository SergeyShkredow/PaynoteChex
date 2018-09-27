const Credstash = require('credstash')
const deasync = require('deasync')

const table = 'prod-store-v3' // TODO take it from env
const credstash = new Credstash({ table })
const getList = deasync(credstash.list.bind(credstash))

module.exports = getList()
