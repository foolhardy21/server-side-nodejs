const Author = require('../models/author')
const Book = require('../models/book')
const async = require('async')

function author_list(req, res) {
    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function(err, list_authors) {
            if(err) {
                return next(err)
            }
            res.render('author_list', { title: 'Author List', author_list: list_authors })
        })
}

function author_detail(req, res) {
    async.parallel({
        author: function(callback) {
            Author.findById(req.params.id)
                .exec(callback)
        },
        author_books: function(callback) {
            Book.find({ 'author': req.params.id })
                .exec(callback)
        }
    }, function(err, results) {
        if(err) {
            return next(err)
        }
        if(results.author==null) {
            let err = new Error('author not found')
            err.status(404)
            return err
        }
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.author_books })
    })
}

function author_create_get(req, res) {
    res.send('NOT IMPLEMENTED: author create get')
}

function author_create_post(re, res) {
    res.send('NOT IMPLEMENTED: author create post')
}

function author_delete_get (req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

function author_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

function author_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

function author_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};

module.exports = {
    author_list,
    author_detail,
    author_create_get,
    author_create_post,
    author_delete_get,
    author_delete_post,
    author_update_get,
    author_update_post,
}