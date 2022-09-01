const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    author_name: {
        type: String,
        minLength: 4,
        required: true
    }
})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author; 