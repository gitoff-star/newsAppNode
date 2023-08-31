const mongoose = require("mongoose");

var newsSchema = new mongoose.Schema({
  group: {
    type: String,
    required: true,
    lowercase: true,
    // default:'news'
  },
  type: String,
  title: String,
  link: String,
  content: String,
  date: Date,
});

var newsModel = mongoose.model("newsModel", newsSchema);

const data = [
  {
    id: 1,
    title: "Alabama ",
    date: Date.now,
    description: " test news of rafale ",
  },
  {
    id: 2,
    title: "Alaska",
    date: Date.now,
    description: " test news of rafale 1.0 ",
  },
  {
    id: 3,
    title: "California ",
    date: Date.now,
    description: " test news of rafale 2.0",
  },
  {
    id: 4,
    title: "news 4 ",
    date: Date.now,
    description: " test news of rafale 3.0",
  },
  {
    id: 5,
    title: "news 5 ",
    date: Date.now,
    description: " test news of rafale 5.0",
  },
  {
    id: 6,
    title: "news 6 ",
    date: Date.now,
    description: " test news of rafale 6.0",
  },
];

module.exports = { data, newsModel };
