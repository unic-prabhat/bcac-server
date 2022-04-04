const { response } = require('express');
const Admin = require('../models/Admin');


const login = (req,res) =>{

    Admin.findOne({email:req.body.email})
    .then(response=>{
      if(response===null){
  
        res.json({
          response:false,
          data:'Wrong email'
        })
  
      }else{
  
        if(response.password===req.body.password){
  
          res.json({
            response:true,
            data:response
          })
  
        }else{
  
          res.json({
            response:false,
            data:'Wrong password'
          })
        }
  
  
      }
    })
  
  }

const store = (req,res) =>{

       Admin.findOne({username:req.body.username},(err,doc)=>{

        if(doc===null){

            Admin.create(req.body)
            .then(response=>{
                res.json({
                    data:doc,
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
        login, store
      }