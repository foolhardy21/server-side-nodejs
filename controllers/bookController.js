const Book = require('../models/book')

function index(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
}

function book_list(req, res) {
    res.send('NOT IMPLEMENTED: Book list')
}

function book_detail(req, res) {
    res.send('NOT IMPLEMENTED: Book detail' + req.params.id)
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
    book_list,
    book_detail,
    book_create_get,
    book_create_post,
    book_delete_get,
    book_delete_post,
    book_update_get,
    book_update_post,
}