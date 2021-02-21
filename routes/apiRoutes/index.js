const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');

const noteArray = [];

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
  let noteText = req.body;

  if (!noteText) {
    res.status(400).send('The note is empty.');
  } else {
    noteArray.push(noteText);
    res.json(notes);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(noteArray)
    );
  }
});


module.exports = router;