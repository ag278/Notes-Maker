const moongoose = require('mongoose');
const Schema = moongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    /*emailid: {
        type: String,
        unique: true
    },
    */ 
    firstname: {
          type: String,
          default: ''
      },
      lastname: {
        type: String,
          default: ''
      },
     
      admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);
module.exports = moongoose.model('User', User);