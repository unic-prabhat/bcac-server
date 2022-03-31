const { response } = require('express');
const Event = require('../models/Event');

const store = (req,res) =>{


    Event.findOne({event_name:req.body.event_name})
.then(response=>{

   if(response===null){

    Event.create(req.body)
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