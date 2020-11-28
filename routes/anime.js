var express = require('express');
var router = express.Router();
var axios = require('axios');
const puppeteer = require('puppeteer');

router.get('/song/:song_name', (req, res, next) => {
    (async () => {
        try {
            var browser = await puppeteer.launch({ headless: true });
            var page = await browser.newPage();
          
            await page.goto(`https://aniplaylist.com/` + req.params.song_name);
            await page.waitForSelector("div.card-image");

            var data = await page.evaluate(() => {
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

            //await browser.close();
            res.statusCode = 200;
            res.setHeader('Content-type','application/json');
            res.json({
                data: data
            });
        } catch(err) {
            //await browser.close();
            res.statusCode = 400;
            res.setHeader('Content-type','application/json');
            res.json({
                err: err
            });
        }
    })()
})



module.exports = router;

/*



*/