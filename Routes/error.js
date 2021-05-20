const express = require('express');
const router = express.Router();

router.get('/err',(req, res) =>{res.send('error page not found')})


module.exports =router