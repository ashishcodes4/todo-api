const express = require('express');
const router = express.Router();
const db = require("../models");


router.get('/', (req, res) => {
    res.send('This is text from router root');
});


module.exports = router;