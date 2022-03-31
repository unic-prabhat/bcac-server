const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({

    organisation_name:{
        type:String
      },
      authorised_person_name:{
        type:String
      },
      mobile_number:{
        type:String
      },
      username:{
        type:String
      },
      password:{
        type:String
      },
      createdBy:{
        type:String
      }

}, {timestamps:true});

const Admin = mongoose.model('tbl_admin', AdminSchema);
module.exports = Admin;
