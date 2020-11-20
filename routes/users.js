var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/completed', (req, res, next) => {

    axios.get(`https://api.myanimelist.net/v2/users/@me/animelist?status=completed&sort=list_updated_at&limit=1000&fields=my_list_status,num_episodes`, {
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        console.log(response.data)
        res.statusCode = 200
        res.json(response.data)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/plan', (req, res, next) => {

    axios.get(`https://api.myanimelist.net/v2/users/@me/animelist?status=plan_to_watch&sort=list_updated_at&limit=1000&fields=my_list_status,num_episodes`, {
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        console.log(response.data)
        res.statusCode = 200
        res.json(response.data)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/watching', (req, res, next) => {

    axios.get(`https://api.myanimelist.net/v2/users/@me/animelist?status=watching&sort=list_updated_at&limit=1000&fields=my_list_status,num_episodes`, {
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        console.log(response.data)
        res.statusCode = 200
        res.json(response.data)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/hold', (req, res, next) => {

    axios.get(`https://api.myanimelist.net/v2/users/@me/animelist?status=on_hold&sort=list_updated_at&limit=1000&fields=my_list_status,num_episodes`, {
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        console.log(response.data)
        res.statusCode = 200
        res.json(response.data)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/dropped', (req, res, next) => {

    axios.get(`https://api.myanimelist.net/v2/users/@me/animelist?status=dropped&sort=list_updated_at&limit=1000&fields=my_list_status,num_episodes`, {
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        console.log(response.data)
        res.statusCode = 200
        res.json(response.data)
    })
    .catch(err => {
        next(err)
    })
})


module.exports = router;
