const BookInstance = require('../models/bookinstance')

function bookinstance_list(req, res, next) {
    BookInstance.find()
                .populate('book')
                .exec(function(err, list_bookinstances) {
                    if(err) {
                        return next(err)
                    } 
                    res.render('bookinstance_list', {title: 'Book Instances', bookinstance_list: list_bookinstances})
                })
}

function bookinstance_detail(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail' + req.params.id)
}

function bookinstance_create_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create get')
}

function bookinstance_create_post(re, res) {
    res.send('NOT IMPLEMENTED: BookInstance create post')
}

function bookinstance_delete_get (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

function bookinstance_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

function bookinstance_update_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

function bookinstance_update_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};

module.exports = {
    bookinstance_list,
    bookinstance_detail,
    bookinstance_create_get,
    bookinstance_create_post,
    bookinstance_delete_get,
    bookinstance_delete_post,
    bookinstance_update_get,
    bookinstance_update_post,
}