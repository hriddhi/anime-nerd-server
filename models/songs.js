const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String
    },
    link: {
        type: String
    },
    tag: {
        type: String
    }
}, {
    timestamps: true
});

const songSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    list : [listSchema]
    }, {
        timestamps: true
});

module.exports = mongoose.model('Song', songSchema);
