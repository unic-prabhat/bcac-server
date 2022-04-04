const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({

    air_registration_number:{
        type:String
      },
      participant_name:{
        type:String
      },
      participant_sex:{
        type:String
      },
      participant_dob:{
        type:String
      },
      participant_mobileno:{
        type:String
      },
      participant_email:{
        type:String
      },
      participant_blood_group:{
        type:String
      },
      emergency_contact_person:{
        type:String
      },
      ecp_telephone_number:{
        type:String
      },
      createdBy:{
        type:String
      }

}, {timestamps:true});

const Participant = mongoose.model('tbl_participant', ParticipantSchema);
module.exports = Participant;
