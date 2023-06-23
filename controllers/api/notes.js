const Note = require('../../models/note');

module.exports = {
  create,
  index
};

async function create(req, res) {
  try {
    // Add the user to the db
    const note = await Note.create(req.body);
    res.json(note);
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user});
        res.json(notes);
    } catch  (err) {
        res.status(400).json(err);
    }
}