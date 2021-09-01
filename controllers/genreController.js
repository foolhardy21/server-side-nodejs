const Genre = require('../models/genre')
const Book = require('../models/book')
const async = require('async')
const { body, validationResult } = require('express-validator')

function genre_list(req, res) {
    Genre.find()
        .sort([['name', 'ascending']])
        .exec(function(err, genre_list) {
            if(err) {
                return next(err)
            }
            res.render('genre_list', { title: 'Genre List', data: genre_list })
        })
}

function genre_detail(req, res) {
    async.parallel({
      genre: function(callback) {
          Genre.findById(req.params.id)
            .exec(callback)
      },
      genre_books: function(callback) {
          Book.find({ 'genre': req.params.id })
            .exec(callback)
      },

    }, function(err, results) {
        if(err) {
            return next(err)
        }
        if(results.genre == null) {
            let err = new Error('Genre not found')
            err.status = 404
            return next(err)
        }
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books })
    })
}

function genre_create_get(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' })
}
 
function genre_create_post_validation(req, res, next) {
    body('name', 'Genre name required').trim().isLength({ min: 1 }).escape()
    next()
}
function genre_create_post(req, res, next) {
    const errors = validationResult(req)
        let genre = new Genre({
            name: req.body.name
        })
        if(!errors.isEmpty()) {
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()})
            return
        } else {
            Genre.findOne({ 'name': req.body.name })
                .exec(function(err, found_genre) {
                    if(err) {
                        return next(err)
                    }
                    if(found_genre) {
                        res.redirect(found_genre.url)
                    } else {
                        genre.save(function(err) {
                            if(err) {
                                return next(err)
                            }
                            res.redirect(genre.url)
                        })
                    }
                })
        }
}
    



function genre_delete_get (req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

function genre_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

function genre_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

function genre_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};

module.exports = {
    genre_list,
    genre_detail,
    genre_create_get,
    genre_create_post,
    genre_create_post_validation,
    genre_delete_get,
    genre_delete_post,
    genre_update_get,
    genre_update_post,
}