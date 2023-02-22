const mongoose = require('mongoose');
const pol=mongoose.connect('mongodb://localhost:27017/przyklad');

const Shema=mongoose.Schema({
    imie:String,
    nazwisko:String
},{collection:'dane'});

const Baza=module.exports=mongoose.model('Baza',Shema);
