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
    if (err) handleError(err)
    res.send(user.data)
  })
})

router.post('/add-action', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let b = req.body

    user.data.actions.push({ title: b.title, id: b.id, description: b.description, tag: b.tag})
    
    user.save((err) => {
      if (err) handleError(err)
      res.send()
    })
  })
})

router.post('/save-new-action-order', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let u = user.data

    User.rearrange(u.actions, req.body.a)
    
    user.markModified('data.actions')
    user.save((err) => {
      if (err) handleError(err)
      
      res.send()
    })
  })
})

router.post('/save-new-project-order', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let u = user.data

    User.rearrange(u.projects, req.body.a)
    
    user.markModified('data.projects')
    user.save((err) => {
      if (err) handleError(err)
      
      res.send()
    })
  })
})


router.post('/delete-action', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)

    User.deleteAction(user.data, req.body.id)

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/delete-project-action', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)

    User.deleteProjectAction(req.body.id, user.data)

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/edit-action', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let b = req.body

    User.editAction(b.title, b.description, b.id, user.data.actions)

    user.markModified('data.actions')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/edit-tag', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let b = req.body

    User.editTag(b.id, b.tag, user.data.actions)

    user.markModified('data.actions')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/add-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let b = req.body

    User.addProject(user.data.projects, b.title)

    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/delete-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let b = req.body

    User.deleteProject(user.data, b.id)

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/create-add-action-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let dt = req.body

    User.createAndAddActionToProject(user.data, dt.id, dt.projectId, dt.title, dt.description)

    user.markModified('data.projects')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/edit-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let dt = req.body

    user.data.projects[dt.id].title = dt.title

    user.markModified('data.projects')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/add-existing-action-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let dt = req.body
    let act = user.data.actions
    let pro = user.data.projects
    
    act[dt.actionId].projectId = dt.projectId
    pro[dt.projectId].actions.push(dt.actionId)

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/remove-action-from-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let dt = req.body
    
    User.removeActionFromProject(user.data, dt.actionId)

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/transform-action-to-project', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let dt = req.body
    
    User.addProject(user.data.projects, dt.title)
    if (dt.delete){
      User.deleteAction(user.data, dt.actionId)
    }

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})

router.post('/add-existing-action-project-from-action', (req, res) => {
  User.getUserById(req.user.id, (err, user) => {
    if (err) handleError(err)
    let dt = req.body
    
    user.data.actions[dt.actionId].projectId = dt.projectId
    user.data.projects[dt.projectId].actions.push(dt.actionId)

    user.markModified('data')
    user.save((err) => {
      if (err) handleError(err)

      res.send()
    })
  })
})


module.exports = router