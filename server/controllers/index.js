let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create the user model instance
let userModel = require('../models/user');
let User = userModel.User; //alisa


module.exports.displayHomePage = (req, res, next) => {
	res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
	res.render('about', {title: 'About'});
}

module.exports.diplayProjectsPage = (req, res, next) => {
	res.render('index', {title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
	res.render('index', {title: 'Services'});
}

module.exports.displayContatctPage = (req, res, next) => {
	res.render('index', {title: 'Contact'});
}




module.exports.displayLoginPage = (req, res, next) =>{
	//check if usr already loged in
	if(!req.user)
	{
		res.render('auth/login', 
		{
			title: "Login",
			messages: req.flash('loginMessage'),
			displayName: req.user ? req.user.displayName : ''
		})
	}
	else 
	{
		return res.redirect('/');
	}
}

module.exports.processLoginPage = (req, res, next) =>{
	passport.authenticate('local',
	(err, user, info) =>{
		if(err)
		{
			return next(err);
		}
		if(!user) 
		{
			req.flash('loginMessage', 'Authentication Error');
			return res.redirect('/login')
		}
		req.login(user, (err) => {
			if (err)
			{
				return next(err);
			}
			return res.redirect('/business-contact')
		});
	})(req, res, next);
}

/* module.exports.displayRegisterPage = (req, res, next) => {
// if user not already loged in
	if(!req.user)
	{
		res.render('auth/register',
		{
			title: 'Register',
			messages: req.flash('registerMessage'),
			displayName: req.user ? req.user.displayName : ''
		})
	}
	else
	{
		return res.redirect('/')
	}
}
*/

/*
module.exports.processRegisterPage = (req, res, next) => {
	//instantiate a user
	let newUser = new User({
		username: req.body.username,
		//password: req.body.password
		email: req.body.email,
		displayName: req.body.displayName
	})

	User.register(newUser, req.body.password, (err) => {
		if(err)
		{
			console.log("Error: Inseting New User")
			if(err.name == "UserExistsError")
			{
				req.flash(
					'registerMessage',
					'Registration Error: User Already Exists!'
				)
				console.log('Error: User Already Exists!')
			}
			return res.render('auth/register',
			{
				title: 'Register',
				messages: req.flash('registerMessage'),
				displayName: req.user ? req.user.displayName : ''
			})
		}
		else
		{
			// if not error exists
			return passport.authenticate('local')(req, res, () =>{
				res.redirect('/book-list')
			})
		}
	})
}
*/

module.exports.performLogout = (req, res, next) => {
	req.logout();
	res.redirect('/')
}