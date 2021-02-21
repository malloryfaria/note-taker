const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let noteText = req.body;
  
    if (!noteText) {
      res.status(400).send('The note is empty.');
    } else {
      const note = notes.push(noteText);
      res.json(note);
    }
  });

module.exports = router;