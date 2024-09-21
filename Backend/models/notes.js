const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const nodeSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text:{
        type : String,
        required : true,
    }
},{
    timestamps: true
});
 var Notes = moongoose.model('note', nodeSchema);
 module.exports = Notes;