const { Schema } = require("mongoose");

const annotationSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  priority: { type: Number, min: 1, max: 3, required: true },
  date: { type: Date, required: true },
});

module.exports = {
  annotationSchema,
};
