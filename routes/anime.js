var express = require('express');
var router = express.Router();
var axios = require('axios');
const puppeteer = require('puppeteer');

router.get('/song/:song_name', (req, res, next) => {
    console.log('uff')
    async () => {
        try {
            console.log('in try')
            var browser = await puppeteer.launch({ headless: true });
            var page = await browser.newPage();
          
            await page.goto(`https://aniplaylist.com/` + req.params.song_name);
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
            res.sendStatus(200)
            res.json({ result: news })
        } catch(err) {
            console.log(err);
            await browser.close();
        }
    }
})



module.exports = router;

/*



*/