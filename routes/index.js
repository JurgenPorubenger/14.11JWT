const express = require('express');
const router = express.Router();
const {listNotes,deleteNote,createNote} =require('../utils/DataBaseUtils');

/* GET home page. */
router.get('/notes', function(req, res, next) {
  listNotes().then(data=>res.send(data));
});

router.post('/notes', async (req,res)=>{
  console.log(req.body);
  createNote(req.body).then(data=>res.send(data))
});

router.delete('/notes/:id', async (req,res)=>{
  deleteNote(req.params.id).then(data=>res.send(data))

});

module.exports = router;
