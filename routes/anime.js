var express = require('express');
var router = express.Router();
var axios = require('axios');
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

const Songs = require('../models/songs')

router.get('/song/:song_name', (req, res, next) => {

    Songs.findOne({ name: req.params.song_name })
    .then(song => {
        if(song){
            //console.log('found')
            //console.log(song)
            res.statusCode = 200;
            res.setHeader('Content-type','application/json');
            res.json({
                data: song.list
            });
        } else {
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

                    Songs.create({ name: req.params.song_name, list: data })
                    .then(song => {
                        //console.log(song)
                        res.statusCode = 200;
                        res.setHeader('Content-type','application/json');
                        res.json({
                            data: song.list
                        });
                    })
                    .catch(err => next(err))

                    
                } catch(err) {
                    await browser.close();
                    next(err)
                }
            })()
        }
    })
    .catch(err => next(err))
    
})



module.exports = router;

/*



*/