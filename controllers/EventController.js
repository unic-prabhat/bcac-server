const { response } = require('express');
const Event = require('../models/Event');



//*****INDEX****


const index = (req,res) => {

  Event.find().sort({_id:-1})
    .then(response=>{
      res.json({
        response:true,
        data:response
      })
    })
    .catch({

    })


}


const listviewrowid = (req,res) =>{

  Event.find({createdBy:req.params.id})
  .then(response=>{
   
    if(response!=''){

       res.json({
       message:'valid',
       data:response
     })

    }
    else 
    {

      res.json({
        message:'invalid',
        data:response
      })

    }
    
  })

  //  if(!err){

  //    res.json({
  //      response:true,
  //      data:doc
  //    })

  //  }else{

  //    res.json({
  //      response:false
  //    })

  //  }

  // })
}

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
        index,listviewrowid,store
      }