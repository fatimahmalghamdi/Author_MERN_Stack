const Author = require("../models/author.model")

//get all author:
function getallAuthors(req, res){
    Author.find()
    .then(allauthors => res.json({
        records_count: allauthors.length,
        authors: allauthors
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the data"}))
}

//add new author:
function addnewAuthor (req, res) {
    Author.create(req.body)
        .then(newlycreatedauthor => res.json(newlycreatedauthor))
        .catch(err => res.status(400).json({error: true, message: "Faild to crate Author"}))
}

//get author by id:
function getAuthorById(req, res){
    const { author_id } = req.params;
    Author.find({_id: author_id})
    .then(theauthor => res.json({
        author: theauthor
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the Author"}))
}

//update author by id:
function updateAuthorById (req, res) {
    const { author_id } = req.params;
    Author.updateOne({_id: author_id}, req.body)
        .then(updateauthor => res.json(updateauthor))
        .catch(err => res.json({error: true, message: "Faild to update Author"}))
}

//delete author by id:
function deleteAuthorById (req, res) {
    const { author_id } = req.params;
    Author.deleteOne({_id: author_id})
        .then((result) => res.json(result))
        .catch(err => res.json({error: true, message: "Faild to delete Author"}))
}


module.exports = {
    getallAuthors,
    addnewAuthor,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById
}