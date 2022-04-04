const { response } = require('express');
const Participant = require('../models/Participant');

const store = (req,res) =>{


 Participant.findOne({air_registration_number:req.body.air_registration_number})
.then(response=>{

   if(response===null){

    Participant.create(req.body)
     .then(response=>{
       res.json({
        data:req.body,
        message:'valid'
       })
     })

   }else{

    res.json({
        data:false,
        message:'invalid'
    })

   }

})



    
    }


    module.exports = {
        store
      }