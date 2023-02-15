const nodeScheduler = require('node-cron');
const {scrape} = require("./scrape");
const {sendEmail} = require("./email");
const {sites} = require('./sites');

function runScheduler() {
    nodeScheduler.schedule('* * * * *', async function () {
        let acc = ""
        for (let i = 0; i < sites.length; i++) {
            const res = await scrape(sites[i].url, sites[i].selectorPrice, sites[i].selectorTitle)
            acc += res + "\n"
        }
        console.log("scraper started.")
        sendEmail(acc)
    });
}

module.exports = { runScheduler }