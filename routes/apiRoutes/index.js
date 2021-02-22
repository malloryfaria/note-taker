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
  let postNote = req.body;

  if (!postNote) {
    res.status(400).send('The note is empty.');
  } else {
  notes.push(postNote);

  fs.writeFile("db/db.json", JSON.stringify(notes), err => {
      if (err) {
          throw err;
      } else {
          return true;
      }
  });

  res.json(notes);
}
});


module.exports = router;