const Genre = require('../models/genre')
const Book = require('../models/book')
const async = require('async')

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

function genre_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre create get')
}

function genre_create_post(re, res) {
    res.send('NOT IMPLEMENTED: Genre create post')
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
    genre_delete_get,
    genre_delete_post,
    genre_update_get,
    genre_update_post,
}