var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:anime_id', (req, res, next) => {
    axios.get(`https://api.myanimelist.net/v2/anime/${req.params.anime_id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`, {
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

router.get('/search/:anime', function(req, res, next) {
    axios.get(`https://api.myanimelist.net/v2/anime?q=${req.params.anime}&fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`, {
        headers: {
            'Authorization': 'Bearer ' + req.query.token
        }
    })
    .then(response => {
        res.statusCode = 200;
        res.json(response.data.data);
    })
    .catch(err => {
        console.error(err.message)
        res.json(err);
    })
});

module.exports = router;