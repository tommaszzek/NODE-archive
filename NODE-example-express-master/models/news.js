var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var newsSchema = new Schema({
    title:  { type: String,required: [true,'Pole jest wymagane']},
    desc: { type: String,required:[true,'Pole jest wymagane']},
    created: { type: Date, default: Date.now },
    
  });
module.exports=mongoose.model('News',newsSchema);