let express = require('express')
let path = require('path')
let ejs = require('ejs')
let i18n = require('i18n')
let mongo = require('mongodb')
let bodyParser = require('body-parser')
let passport = require('passport')
var mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let expressValidator = require('express-validator')
let session = require('express-session')
let flash = require('connect-flash')
var users = require('./routes/users')
var gtdf = require('./routes/gtdf')
i18n.configure({
  locales: ['en', 'pt-BR'],
  cookie: 'localeCookie',
  directory: path.join(__dirname, 'locales'),
  queryParameter: 'lang',
  defaultLocale: 'en',
}); // process.env.DATABASE
mongoose.connect('mongodb://localhost/GTDF', {
  useNewUrlParser: !0
})
var mongoose = mongoose.connection
let app = express()
app.use(cookieParser())
app.use(session({
  secret: 'secret',
  saveUninitialized: !0,
  resave: !0
}))
app.use(flash())
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  res.locals.deletedProject = !0
  next()
})
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'static')))
app.use(passport.initialize())
app.use(passport.session())
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root
    while (namespace.length) {
      formParam = '[' + namespace.shift() + ']'
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    }
  }
}))
app.use(i18n.init)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: !1
}))
app.use(cookieParser())
app.use('/', users)
app.use('/', gtdf)

function checkAndChangeLocale(req, res) {
  if (req.session.chosen_locale)
    i18n.setLocale(res, req.session.chosen_locale)
}
app.get('/', function(req, res) {
  checkAndChangeLocale(req, res)
  res.render('index', {
    user: req.user
  })
})
app.get('/begin', function(req, res) {
  checkAndChangeLocale(req, res)
  res.render('begin')
})
app.get('/privacy-policy', function(req, res){
  checkAndChangeLocale(req, res)
  res.render('privacy')
})
app.get('/en', function(req, res) {
  req.session.chosen_locale = 'en'
  res.redirect('/')
})
app.get('/pt-BR', function(req, res) {
  req.session.chosen_locale = 'pt-BR'
  res.redirect('/')
})
app.use(function(req, res) {
  checkAndChangeLocale(req, res)
  res.status(404)
  res.render('404', {
    user: req.user
  })
});
app.use(function(error, req, res, next) {
  checkAndChangeLocale(req, res)
  res.status(500)
  res.render('500')
});
app.listen(process.env.PORT || 3000, function(req, res) {
  console.log('Server started at port 3000...')
})
