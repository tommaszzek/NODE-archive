const epxress=require('express');
const router=epxress.Router();
const Baza=require('../model/mogo');


router.get('/',(req,res)=>{

    const data=Baza.find((err,data)=>{
        res.render('index',{
            data
        });
     });

});

router.get('/usun/:id',(req,res)=>{

    Baza.deleteOne({_id: req.params.id }).then(function(){
        console.log('Usunieto');
        res.redirect('/pokaz');

    }).catch(function(err){
        console.log(err);
    })
    
    
    const data=Baza.find((err,data)=>{
        res.render('index',{
            data
        });
     });

});

router.post('/',(req,res)=>{
    items=new Baza({
       imie:req.body.imie,
       nazwisko:req.body.nazwisko
  });
   items.save(function(err,items){
       if(err) console.log('Nie zapisano do bazy');
       console.log('Zapisano do bazy danych');
       res.redirect('/pokaz');
   });

});

module.exports=router;
