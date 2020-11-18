var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:anime', function(req, res, next) {
    axios.get(`https://api.myanimelist.net/v2/anime?q=${req.params.anime}&fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`, {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmMTE3MGJmYWE4MzcyNzU4NDY4NzY5YTFmODQyZWVmMjBiYWI2YmEwZTY3ZDg4MDZhYjVkMjcwNDZlN2FiNjY2MmJjZGNmYzY4ZTgwYTczIn0.eyJhdWQiOiJhZjJhZjM3M2QxM2I0NzJiZGZjODdjNjU2NWJjOThmYiIsImp0aSI6IjZmMTE3MGJmYWE4MzcyNzU4NDY4NzY5YTFmODQyZWVmMjBiYWI2YmEwZTY3ZDg4MDZhYjVkMjcwNDZlN2FiNjY2MmJjZGNmYzY4ZTgwYTczIiwiaWF0IjoxNjA0ODEzNzE3LCJuYmYiOjE2MDQ4MTM3MTcsImV4cCI6MTYwNzQwNTcxNywic3ViIjoiODc1NjU2MyIsInNjb3BlcyI6W119.BZLd3pGXhwot19tHblmusfDyf5cSgY_OI4E_BYpAh2CbMmtdLKemYTxCWkSO-7f2vYcxYxrdp5cDiTKMF64vmL3xzMb19CMH-uTWMxUaJAJJqPvOirXcFSo_muGyU5ffh_QlR2R5SBRnGv6UmVSM3cyMFpRUG_G9BhZMXaUIq7eBoDNz0WqwI76aJmCzgz3YJHMne9LNHuEx4JLhkj0_sQRZ-PNwv8-XcAG9HZN3QUe9L7JUwCpVs8dM443s6YGbjC5432BvGVXLelmeTFWq2vtfEhl28_pXUoXSGMd77EOB3nuWYsaExQlTbAbpGeDZeBifVv3ZQpEL-zjyTUuBKg',
        }
    } )
    .then(response => {
        //console.log(response.data)
        res.statusCode = 200;
        res.json(response.data.data);
        //res.end(response.data.data)
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router;