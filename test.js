const puppeteer = require("puppeteer");
const chalk = require("chalk");
var fs = require("fs");

// MY OCD of colorful console.logs for debugging... IT HELPS
const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {
  try {
    // open the headless browser
    var browser = await puppeteer.launch({ headless: true });
    // open a new page
    var page = await browser.newPage();
    // enter url in page
    await page.goto(`https://aniplaylist.com/death-note`);
    await page.waitForSelector("div.card-image");

    var news = await page.evaluate(() => {
      var LinkNodeList = document.querySelectorAll(`div.card-image a`);
      var titleLinkArray = [];
      for (var i = 0; i < LinkNodeList.length; i++) {
        titleLinkArray[i] = {
          link: LinkNodeList[i].getAttribute("href"),
          name: LinkNodeList[i].getAttribute("aria-label")
        };
      }
      return titleLinkArray;
    });
    console.log(news);
    await browser.close();
    
    console.log("Browser Closed");
  } catch (err) {
    console.log(err);
    await browser.close();
    console.log("Browser Closed");
  }
})();