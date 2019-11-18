const mongoose = require ('mongoose');
const NoteModel = require ('../models/Note');


module.exports.setUpConnection = function () {
    return mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

module.exports.listNotes = function () {
    return NoteModel.find();
};


module.exports.createNote = function (data) {
    const note = new NoteModel({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date()
    });
    return note.save();
};

module.exports.deleteNote = function (id) {
    return NoteModel.findByIdAndRemove(id);
};