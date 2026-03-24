const router = require('express').Router();
const express = require('express');

router.use('/', require('./swagger')); 

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
});

router.use('/contacts', require('./contacts'));

module.exports = router;