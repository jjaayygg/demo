const express = require('express')
const path = require('path')
require('dotenv').config()
const fileUpload = require('express-fileupload')
const app = express();
const cors = require('cors')
app.use(cors())
//app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));
app.use(express.json());
app.use(require('./Routes/error'))
app.use(require('./Routes/files'))
app.use('/download',require('./Routes/download'))














port = 300;
app.listen(port,()=>{console.log(`listening on ${port}`)})