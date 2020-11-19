let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Business = require('../models/business');

module.exports.displayBusinessList = (req, res, next) => {
	Business.find((err, businessList) =>{
		if(err)
		{
			return console.error(err);
		}
		else
		{
			//console.log(BusinessList);

			res.render('business/list', {title: 'Business Contact', BusinessList: businessList});
		}
	});
}

module.exports.displayAddPage = (req, res, next) => {
	res.render('business/add', {title: 'Add Contact'});

}

module.exports.processAddPage = (req, res, next) => {
	let newBusiness = Business({
		"name":req.body.name,
		"phoneNumber": req.body.phoneNumber,
		"email": req.body.email
	});

	Business.create(newBusiness, (err, Book) => {
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			res.redirect('/business-contact');
		}
	})
}


module.exports.displayEditPage = (req, res, next) => {
	let id = req.params.id;

	Business.findById(id, (err, businessToEdit) => {
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			res.render('business/edit', {title: 'Edit Business Contact', business: businessToEdit})
		}
	})
}

module.exports.processEditPage = (req, res, next) => {
	let id = req.params.id

	let updatedBusiness = Business({
		"_id":id,
		"name":req.body.name,
		"phoneNumber": req.body.phoneNumber,
		"email": req.body.email
	});
	Business.updateOne({_id: id}, updatedBusiness, (err) => {
		if(err)
		{
			console.log(err)
			res.end(err);
		}
		else
		{
			res.redirect('/business-contact');

		}
	});
}

module.exports.performDelete = (req, res, next) => {
	let id = req.params.id;

	Business.remove({_id: id}, (err) => {
		if(err)
		{
			console.log(err)
			res.end(err);
		}
		else
		{
			res.redirect('/business-contact');

		}
	})
}
