const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create new Schema:
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        reauired: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

//Create the model:
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;