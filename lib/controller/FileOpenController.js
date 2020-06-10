
'use strict';

var fs = require('fs');
var Utils = require('../Utils');
var util = require('util');
var extend = util._extend;
var opener = require('opener');
var AppControllerSingleton = require('./AppController');
var appController = AppControllerSingleton.getInstance();

/**
 *
 * @class FileOpenController
 * @constructor
 *
 */
function FileOpenController() {
	this.init();
}

FileOpenController.prototype = extend(FileOpenController.prototype, Utils.prototype);
FileOpenController.prototype = extend(FileOpenController.prototype, {

	constructor: FileOpenController,

	/**
	 *
	 * @method init
	 * called by constructor
	 * @public
	 */
	init: function () {

		this.options = appController.options;

		appController.app.get('/service/open', this.handleOpen.bind(this));
		appController.app.get('/service/text', this.handleContentGet.bind(this));
		appController.app.post('/service/text', this.handleContentSave.bind(this));
	},

	/**
	 * @method handleOpen
	 * @param {object} req
	 * @param {object} res
	 * @returns {void}
	 */
	handleOpen: function (req, res) {
		opener(req.query.path);
		res.end();
	},

	handleContentGet: function(req, res) {
		res.sendFile(req.query.path);
	},

	handleContentSave: function(req, res) {
		var text = req.body.text;
		fs.writeFile(req.query.path, text, { encoding: 'utf8'}, function(err) {
			if(!err) {
				res.end();
				return;
			}
			console.error(err);
		});
	}

});

module.exports = FileOpenController;
