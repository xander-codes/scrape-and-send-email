const puppeteer = require('puppeteer')

async function scrape(url, selector, selectorTitle) {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()

    await page.goto(url)
    const titleElement = await page.waitForSelector(selectorTitle)
    const title = await page.evaluate(el => el.textContent, titleElement);
    const element = await page.waitForSelector(selector);
    const price = await page.evaluate(element => element.textContent, element);
    const cleanTitle = title.trim()
    // console.log(price, " == ", cleanTitle)
    await browser.close()
    return price + " : " + cleanTitle
}

module.exports = {scrape}
