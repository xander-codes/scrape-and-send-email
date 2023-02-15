const nodeScheduler = require('node-cron');
const {scrape} = require("./scrape");
const {sendEmail} = require("./email");
const {sites} = require('./sites');

function runScheduler() {
    nodeScheduler.schedule('* * * * *', async function () {
        console.log(sites);
        let acc = ""

        try {
            for (let i = 0; i < sites.length; i++) {
                const res = await scrape(sites[i].url, sites[i].selectorPrice)
                acc += res + "\n"
            }
        } catch (err) {
            console.log(err.message);
        }
        console.log("scraper started.")
        sendEmail(acc)
    });
}

module.exports = {runScheduler}