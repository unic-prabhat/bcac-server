const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({

    event_name:{
        type:String
      },
      city:{
        type:String
      },
      event_date:{
        type:String
      },
      event_time:{
        type:String
      },
      number_of_participants:{
        type:String
      },
      event_distance:{
        type:String
      },
      createdBy:{
        type:String
      }

}, {timestamps:true});

const Event = mongoose.model('tbl_event', EventSchema);
module.exports = Event;
