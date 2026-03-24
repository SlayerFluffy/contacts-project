const router = require('express').Router();
const express = require('express');

router.use('/', require('./swagger')); 

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
});

router.use('/characters', require('./characters'));
router.use('/users', require('./users'));

module.exports = router;