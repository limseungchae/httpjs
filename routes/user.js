const express = require('express');
const path = require('path');
const router = express.Router();

const html = 'text/html; charset=utf-8';

// show user page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public','user.html'))
});

router.get('/add', (req, res) => {
    res.type(html);
    res.end('<h1>uesr 가입 페이지 입니다!!</h1>');
});


router.get('/view', (req, res) => {
    res.type(html);
    res.end('<h1>uesr 가입 페이지 입니다!!</h1>');
});

module.exports =  router;