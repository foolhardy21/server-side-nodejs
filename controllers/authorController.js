const Author = require('../models/author')

function author_list(req, res) {
    res.send('NOT IMPLEMENTED: author list')
}

function author_detail(req, res) {
    res.send('NOT IMPLEMENTED: author detail' + req.params.id)
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