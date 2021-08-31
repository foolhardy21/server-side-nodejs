const Book = require('../models/book')
const BookInstance = require('../models/bookinstance')
const Author = require('../models/author')
const Genre = require('../models/genre')

const async = require('async')

function index(req, res) {
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback)
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback)
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status: 'Available'}, callback)
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback)
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback)
        }
    }, function(err, result) {
        res.render('index', {title: 'Local Library Home', error: err, data: result})
    })
}

function book_list(req, res, next) {
    Book.find({}, 'title author')
        .populate('author')
        .exec(function(err, list_books) {
            if(err) {
                return next(err)
            }
            res.render('book_list',{ title: 'Book List', book_list: list_books })
        })
}

function book_detail(req, res) {
    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id)
                .populate('author')
                .populate('genre')
                .exec(callback)
        },
        book_instance: function(callback) {
            BookInstance.find({ 'book': req.params.id })
                .exec(callback)
        },
    }, function(err, results) {
        if(err) {
            return next(err)
        } 
        if(results.book == null) {
            let err = new Error('Book not found')
            err.status = 404
            return next(err)
        }

        res.render('book_detail', { title: 'Book Detail', book: results.book, book_instances: results.book_instance })
    })
}

function book_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Book create get')
}

function book_create_post(re, res) {
    res.send('NOT IMPLEMENTED: Book create post')
}

function book_delete_get (req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

function book_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

function book_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

function book_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};

module.exports = {
    index,
    book_list,
    book_detail,
    book_create_get,
    book_create_post,
    book_delete_get,
    book_delete_post,
    book_update_get,
    book_update_post,
}