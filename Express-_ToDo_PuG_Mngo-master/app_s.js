const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const pol=mongoose.connect('mongodb://localhost:27017/przyklad');
const path = require('path');
const app = express()
const port = 3000
const index=require('./router/index.js');
const pokaz=require('./router/pokaz.js');
const edit=require('./router/edit.js');

app.set('view engine','pug');
// app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',index);
app.use('/pokaz',pokaz);
app.use('/edit',edit);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));