let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET home page. */
//router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
//router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
//router.get('/projects', indexController.diplayProjectsPage);
/* GET Services page. */
//router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
//router.get('/contact', indexController.displayContatctPage);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', message: "About Me"});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', message: "Projects"});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', message: "Services"});
});



/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', message: "Contact Us"});
});

// -------------------------------------------------------------------- //

// * Get route for displaying Login  page 
router.get('/login', indexController.displayLoginPage);

// * post route for processing login page
router.post('/login', indexController.processLoginPage);

// * Get route for displaying register  page 
//router.get('/register', indexController.displayRegisterPage);

// * post route for processing register page
//router.post('/register', indexController.processRegisterPage);

// * Get to perform yser logout  Operation
router.get('/logout', indexController.performLogout);

module.exports = router;
