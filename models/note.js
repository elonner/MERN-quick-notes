const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {type: String, required: true},
    user: Schema.Types.ObjectId
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);