const mongoose = require('mongoose');
const {v4:uuidv4} = require('uuid');

mongoose.connect('mongodb+srv://newuser:newuser@cluster0.oqico.mongodb.net/Inshare2?retryWrites=true&w=majority').then(()=>{console.log('connection successful')}).catch((err)=>{console.log(err)})

const productScheme =
    {
        name:String,
        uuid:String,
        fileType:String,
        fileSize:Number
    }




let db = mongoose.model('insharedb2',productScheme)

module.exports = db
