const { response } = require('express');
const Superadmin = require('../models/Superadmin');

const store = (req,res) =>{

         Superadmin.findOne({email:req.body.email})
         .then(response=>{
         
            if(response===null){
         
            Superadmin.create(req.body)
              .then(response=>{
                res.json({
                  response:true
                })
              })
         
            }else{
         
             res.json({
               response:false
             })
         
            }
         
         })
    
   
    
    }


const login =(req,res)=>{


    Superadmin.findOne({email:req.body.email,password:req.body.password},(err,doc)=>{
        if(doc===null){
            res.json({
                data:false,
                message:'invalid'
            })
        }else{
            res.json({
                data:doc,
                message:'valid'
            })
        }
    })

    
}

    module.exports = {
        store,login
      }
      