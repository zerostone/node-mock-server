
var assert = require('assert'),
	request = require('request');

function _fetch (opt) {
	request({
		uri: opt.url,
		method: opt.method || 'GET',
		form: opt.data || {}
	}, function(error, res, data) {
		if (error) {
			opt.error.call(this, data);
		} else {
			opt.success.call(this, data);
		}
	});
}

module.exports = function(serverOptions, _getFile) {

	var pathExpected = './test/expected/mock-server',
		baseUrl = serverOptions.urlBase + serverOptions.urlPath;

	it('GET /products/search', function (done) {
		_fetch({
			url: baseUrl + '/products/search?_expected=success',
			success: function (data) {
				var expected = _getFile(pathExpected + '/01.json');
				assert.equal(data, expected);
				done();
			}
		});
	});

	it('GET /products/{productCode}', function (done) {
		_fetch({
			url: baseUrl + '/products/31221?_expected=success',
			success: function (data) {
				var expected = _getFile(pathExpected + '/02.json');
				assert.equal(data, expected);
				done();
			}
		});
	});

	it('GET /products/{productCode} - with request data', function (done) {
		_fetch({
			url: baseUrl + '/products/31221?_expected=request-data&currentPage=12',
			success: function (data) {
				var expected = _getFile(pathExpected + '/02-2.json');
				assert.equal(data, expected);
				done();
			}
		});
	});

	it('GET /products/{productCode} - with functions', function (done) {
		_fetch({
			url: baseUrl + '/products/31221?_expected=func',
			success: function (data) {
				data = JSON.parse(data);
				assert.equal(typeof data, 'object');
				assert.equal(typeof data.image, 'object');
				assert.equal(typeof data.image.url, 'string');
				assert.equal(typeof data.image.alt, 'string');
				assert.equal(typeof data.highlight, 'boolean');
				assert.equal(typeof data.quantity, 'number');
				done();
			}
		});
	});

	it('GET /products/{productCode} - with faker', function (done) {
		_fetch({
			url: baseUrl + '/products/31221?_expected=faker',
			success: function (data) {
				data = JSON.parse(data);
				assert.equal(typeof data, 'object');
				assert.equal(typeof data.price, 'object');
				assert.equal(typeof data.price.currency, 'string');
				assert.equal(typeof data.card, 'object');
				assert.equal(typeof data.card.name, 'string');
				done();
			}
		});
	});

	it('POST /products/{productCode}', function (done) {
		_fetch({
			url: baseUrl + '/products/31221?_expected=success',
			method: 'POST',
			success: function (data) {
				var expected = _getFile(pathExpected + '/03.json');
				assert.equal(data, expected);
				done();
			}
		});
	});

};