var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect('https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=af2af373d13b472bdfc87c6565bc98fb&state=xyz&redirect_uri=https://animenerd.herokuapp.com/auth/callback&code_challenge=47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU&code_challenge_method=plain');
})

router.get('/callback', (req, res, next) => {
    console.log(req.query.code)

    const formdata = ['client_id=af2af373d13b472bdfc87c6565bc98fb', 'client_secret=a8ad0e25e517eb604c448a3966ad2876d7bf2d98dd28b609f075b9491976522f','grant_type=authorization_code', 'code=' + req.query.code, 'code_verifier=47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU', 'redirect_uri=https://animenerd.herokuapp.com/auth/callback']

    axios.post('https://myanimelist.net/v1/oauth2/token', formdata.join('&'), {
        'Content-Type': 'application/x-www-form-urlencoded'
    })
    .then(result => {
        console.log(result.data)
        res.redirect('animenerd://animenerd.io?id=' + result.data.access_token)
    })
    .catch((err) => {
        console.log(err.data)
    })
})

module.exports = router;
