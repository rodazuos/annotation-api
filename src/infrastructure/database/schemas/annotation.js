const { Schema } = require("mongoose");

const annotationSchema = new Schema({
    title: String,
    content: String,
    priority: Number,
    date: { type: Date },
});

module.exports = {
    annotationSchema
};
