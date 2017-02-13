import fs from 'fs'

exports.router = require('express').Router();

let files = fs.readdirSync(__dirname + '/../routes');

files.forEach(function (file) {

	if (!file.endsWith('.js')) return;
	if (file.endsWith('index.js')) return;

	let controller = require('./' + file);

	if (!controller.router) return;

	exports.router.use(controller.mountPath || '', controller.router);
});