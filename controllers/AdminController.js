const { response } = require('express');
const Admin = require('../models/Admin');


const login =(req,res)=>{


    Admin.findOne({email:req.body.email,password:req.body.password},(err,doc)=>{
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