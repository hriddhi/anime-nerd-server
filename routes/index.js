var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
    console.log('Hello');
    res.statusCode = 200;
    res.json({success: 'success'});
});

module.exports = router;

// axios.post("https://p4b7ht5p18-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)&x-algolia-application-id=P4B7HT5P18&x-algolia-api-key=eacf3bb4eb1e59a0891c767d7b2765de",
//     "{\"requests\":[{\"indexName\":\"songs_prod\",\"params\":\"query=death%20note&hitsPerPage=12&maxValuesPerFacet=100&page=0&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%22song_type%22%2C%22markets%22%2C%22season%22%2C%22label%22%5D&tagFilters=\"}]}",
//     {
//         "headers": {
//             "accept": "application/json",
//             "content-type": "application/x-www-form-urlencoded",
//         }
//     })
//     .then(result => {
//         console.log(result.data)
//         res.sendStatus(200)
//         res.end()
//     })
//     .catch(err => console.error(err.message))