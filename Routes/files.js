const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const db = require('../db/mongoose')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

 

">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
router.post('/upload', function (req, res) {
    console.log(req.body)

    let k = req.files.image;
    k.mv(path.join(__dirname,'../Uploaded','/' + Math.floor(Math.random() * (10 ** 9)) + 'd' + Date.now() +k.name))

     db.create({
         name: k.name,
            mimetype:k.mimetype,
         uuid: uuidv4(),
         path:(__dirname,'../Uploaded','/' + Math.floor(Math.random() * (10 ** 9)) + 'd' + Date.now() +k.name),
         fileType: path.extname(k.name),
        fileSize: k.size
     }).then((k)=>{res.json({a:(process.env.app_url+'download/' +k.uuid)})})

   
})

module.exports = router
 