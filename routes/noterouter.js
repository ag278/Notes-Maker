var express = require('express');
const mongoose = require('mongoose');
var noterouter = express.Router();
const Notes = require('../models/notes');

noterouter.route('/')
.get((req,res,next) => {
    Notes.find({})
    .then((notes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(notes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Notes.create(req.body)   
    .then((Note) => {
        console.log('Note Created ', Note);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Note);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    Notes.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});
module.exports = noterouter;