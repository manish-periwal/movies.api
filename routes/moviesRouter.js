var express = require('express');

var moviesController=require('./../controllers/moviesController');

var moviesRouter = express.Router();

moviesRouter.route('')
	.get(moviesController.get);
	.post(moviesController.add);

moviesRouter.route('/:id')
	.get(moviesController.getById);
	.put(moviesController.update);

	module.exports=moviesRouter;