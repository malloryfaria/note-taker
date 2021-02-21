const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');
const { deleteNote } = require('../../public/assets/js/index');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    let noteText = req.body;
  
    if (!noteText) {
      res.status(400).send('The note is empty.');
    } else {
      const note = notes.push(noteText);
      res.json(note);
    }
  });

// router.delete('/notes:id', (req, res) => {
//   let id = req.params.id;

//   const deleter = deleteNote(id, notes);
//   res.json(deleter);
// })

module.exports = router;