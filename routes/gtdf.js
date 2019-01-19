var express = require('express')
var router = express.Router()
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
let i18n = require('i18n')

var User = require('../models/user')

function checkAndChangeLocale(req, res){
  if (req.session.chosen_locale)
      i18n.setLocale(res, req.session.chosen_locale)
}

router.get('/user', function(req, res){
  checkAndChangeLocale(req, res)

  if (!req.isAuthenticated()) {
    res.redirect('/login')
  } else {
    res.render('user', {
      user: req.user
    })
  }
})

router.get('/get-user', function(req, res){
  User.getUserById(req.user.id, function(err, user){
    if (err) handlerror(err)
    res.send(JSON.stringify(user.data))
  })
})


module.exports = router