const epxress=require('express');
const router=epxress.Router();
const Baza=require('../model/mogo');

router.get('/',(req,res)=>{
         const data=Baza.find((err,data)=>{


            res.render('pokaz',{
                data
            });
         });
    

});

router.get('/deszczowa',(req,res)=>{
    res.send('DESZCZ');

});


module.exports=router;
