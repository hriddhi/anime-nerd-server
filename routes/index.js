var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
    console.log('Hello');
    res.statusCode = 200;
    res.json({success: 'success'});
});

module.exports = router;
