import { Router } from 'express'
import { models } from '../config/constants'
import BaseApi from './base-api'

let api = Router();

Object.keys(models).forEach((modelName) => {
	let schema = require('./' + modelName.toLowerCase())
	let routes = BaseApi(modelName, schema)
	Object.keys(routes).forEach(method => {
		api.route(`/${modelName}/:id?`)[method](routes[method])
	})
});

export default api