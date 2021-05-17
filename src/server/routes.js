const dotenv = require('dotenv');
dotenv.config();
var path = require('path')

const express = require('express')
var router = express.Router();

var validator = require('validator'); // validation
var fetch = require('node-fetch'); // fetch

// main routes
router.get('/', (req, res) => {
    res.sendFile('src/client/index.html')
    //res.sendFile('dist/index.html')
})
router.post('/add_url', (req, res) => {
    const BASE_URL = process.env.BASE_URL
    const API_KEY = process.env.API_KEY
    let format = 'txt'
    const article_url = req.body.url
    // check if the string is an URL
    if(validator.isURL(req.body.url)) {
        format = 'url';
    }
    const url = `${BASE_URL}?key=${API_KEY}&${format}=${article_url}&lang=auto&model=general`
    console.log(url)
    fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
    }).then((response) => {
        return response.json()
    }).then(data => {
            console.log("data: ", data)
            res.send({data})
        }).catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

module.exports = router;
