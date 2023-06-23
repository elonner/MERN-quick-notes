const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// All paths start with '/api/notes'
// GET /api/notes -- get all notes
router.get('/', notesCtrl.index);
// POST /api/notes -- create note
router.post('/', notesCtrl.create);


module.exports = router;