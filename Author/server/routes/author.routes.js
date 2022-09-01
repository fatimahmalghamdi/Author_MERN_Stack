const AuthorController = require("../controllers/author.controller")

function registerAuthorRoutes(app)
{
    app.get("/api/authors", AuthorController.getallAuthors)
    app.post("/api/authors/new", AuthorController.addnewAuthor)
    app.get("/api/authors/:author_id", AuthorController.getAuthorById)
    app.put("/api/authors/update/:author_id", AuthorController.updateAuthorById)
    app.delete("/api/authors/delete/:author_id", AuthorController.deleteAuthorById)
}

module.exports = registerAuthorRoutes