const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');

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
      fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(noteText)
      );
      res.json(note);

    }
  });

module.exports = router;