const epxress=require('express');
const router=epxress.Router();
const Baza=require('../model/mogo');


router.get('/:id',(req,res)=>{
 
    const data=Baza.findById(req.params.id,(err,data)=>{
        res.render('edit',{
            data
        });
     });

});

router.post('/:id',(req,res)=>{
    imt=new Baza({
        _id:req.params.id,
        imie:req.body.imie,
        nazwisko:req.body.nazwisko
   });
    const data=Baza.findByIdAndUpdate(req.params.id,imt,(err,data)=>{
        if(err) console.log(err);
        res.redirect('/');
     });

});

module.exports=router;