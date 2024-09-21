var express = require('express');
const mongoose = require('mongoose');
var noterouter = express.Router();
const Notes = require('../models/notes');
var authenticate = require('../authenticate');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const { request } = require('express');

noterouter.route('/')
.get(authenticate.verifyUser,(req,res,next) => {
    var token = req.headers.authorization;
    token=token.split(' ')[1]
    var x = jwt.decode(token);
    Notes.find({id: x})
    .then((notes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(notes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,(req, res, next) => {
    var token = req.headers.authorization;
    //console.log(token);    
    token=token.split(' ')[1]
    var x = jwt.decode(token);
    var xx = req.body;
    let mynode={
        id: x,
        title: xx.title,
        text: xx.text 
    };    
    console.log(mynode);
    Notes.create(mynode)   
    .then((Note) => {
        console.log('Note Created ', Note);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Note);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser,(req, res, next) => {
    
    var t=req.body.xx;
    //console.log(t);
    Notes.remove( {"_id":t})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.delete(authenticate.verifyUser,(req, res, next) => {
    var t=req.data;
    console.log(req);
    Notes.test_users.remove( {"_id":t})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));

});
module.exports = noterouter;