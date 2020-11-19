let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const business = require('../models/business');

let passport = require('passport')


//helper fundtion for gaurd
function requireAuth(req,res,next)
{
	if(!req.isAuthenticated())
	{
		return res.redirect('/login')
	}
	next();
}
//connect to contact
let Business = require('../models/business');

let businessController = require('../controllers/business')

router.get('/', businessController.displayBusinessList);
/* GET Route for display add page - CREATE operation */

router.get('/add', requireAuth, businessController.displayAddPage);

/* POST Route for processing add page - CREATE operation */
router.post('/add', requireAuth, businessController.processAddPage)
/* GET Route for display edit page - UPDATE operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage)
/* POST Route for processing edit page - UPDATE operation */


router.post('/edit/:id', requireAuth, businessController.processEditPage)

/* GET to perfor deletion - delete operation */
router.get('/delete:id', requireAuth, businessController.performDelete)
module.exports = router;