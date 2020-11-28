var express = require('express');
var router = express.Router();
var axios = require('axios');
const puppeteer = require('puppeteer');

router.get('/song/:song_name', (req, res, next) => {
    (async () => {
        try {
            var browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
            var page = await browser.newPage();
          
            await page.goto(`https://aniplaylist.com/` + req.params.song_name);
            await page.waitForSelector("div.song-card");

            var data = await page.evaluate(() => {
                var LinkNodeList = document.querySelectorAll(`div.song-card`);
                var titleLinkArray = [];
                for (var i = 0; i < LinkNodeList.length; i++) {
                    titleLinkArray[i] = {
                        link: LinkNodeList[i].querySelector('.card-image > a').getAttribute('href'),
                        tag: LinkNodeList[i].querySelector('.card-content > .tag').innerHTML.replace(/\t|\n/g,''),
                        name: LinkNodeList[i].querySelector('.song-data > strong').innerHTML.replace(/\t|\n/g,'')
                    };
                }
                return titleLinkArray;
            });

            await browser.close();
            res.statusCode = 200;
            res.setHeader('Content-type','application/json');
            res.json({
                data: data
            });
        } catch(err) {
            await browser.close();
            next(err)
        }
    })()
})



module.exports = router;

/*



*/