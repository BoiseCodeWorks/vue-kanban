import { Router } from 'express'
import { models } from '../config/constants'
import BaseApi from './base-api'

let api = Router();

Object.keys(models).forEach((k) => {
	let model = models[k]
	let schema = require('./' + model.name.toLowerCase())
	let routes = BaseApi(model, schema)
	Object.keys(routes).forEach(method => {
		api.route(`/${model.endpoint}/:id?`)[method](routes[method])
	})

	if(model.useCustomRoutes){
		let customRoutes = require('../custom-routes/' + model.name.toLowerCase() + '-routes').default
		if(customRoutes){
			Object.keys(customRoutes).forEach(k => {
				let route = customRoutes[k]
				console.log(route)
				api.route(route.path)[route.reqType](route.method)
			})
		}
	}

});

export default api