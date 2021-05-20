const express = require('express')
const router = express.Router();
const db = require('../db/mongoose')

router.get('/:uuid',(req,res)=>{
db.findOne({uuid:req.params.uuid}).then((k)=>{res.json(k)})

}


)











module.exports = router