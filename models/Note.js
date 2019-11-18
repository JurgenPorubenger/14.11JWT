const mongoose = require ('mongoose');

const NoteSchema = mongoose.Schema({
    title: {type:String},
    text: {type: String, required:true},
    color: {type: String},
    createdAT: {type: Date, default: Date.now}
});

const Note = mongoose.model('Note', NoteSchema );

module.exports = Note;