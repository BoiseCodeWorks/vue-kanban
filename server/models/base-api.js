var actions = require('../config/constants').actions

module.exports = API

function API(model, schema) {
  if (model.preventDefaultApi) { return {} }
  return {
    get: get,
    post: create,
    put: update,
    delete: remove
  }

  function get(req, res, next) {
    console.log("requesting api ", model.name)
    var id = req.params.id || req.query.id || '';
    var params = req.params.id ? req.params : {};
    var query = req.query.with || '';
    console.log(query)

    if (id) {
      schema.findById(id)
        .populate(query)
        .then(data => {
          return res.send(handleResponse(actions.find, data))
        })
        .catch(error => {
          return next(handleResponse(actions.find, null, error))
        })
    } else {
      schema.find(params, query)
        .populate(query)
        .then(data => {
          var result = handleResponse(actions.findAll, data);
          result.query = query
          result.params = params
          return res.send(result)
        })
        .catch((error) => {
          return next(handleResponse(actions.findAll, null, error))
        })
    }
  }

  function create(req, res, next) {
    var action = actions.create

    let model = new schema(req.body)
    model.creatorId = req.session.uid
    
    model.save()
      .then(data => {
        return res.send(handleResponse(action, data))
      })
      .catch(error => {
        return next(handleResponse(action, null, error))
      })
  }

  function update(req, res, next) {
    var action = actions.update
    var id = req.params.id || req.query.id || '';

    if (!id) {
      return next(handleResponse(action, null, { error: { message: 'Invalid request no id provided' } }))
    }

    schema.findOneAndUpdate({ _id: id }, req.body)
      .then(data => {
        return res.send(handleResponse(action, { message: 'Successfully updated' }))
      })
      .catch(error => {
        return next(handleResponse(action, null, error))
      })
  }

  function remove(req, res, next) {
    var action = actions.remove
    var id = req.params.id || req.query.id || '';

    if (!id) {
      return next(handleResponse(action, null, { error: { message: 'Invalid request no id provided' } }))
    }

    schema.findOneAndRemove({ _id: id }).then(function (data) {
      return res.send(handleResponse(action, data))
    })
      .catch(error => {
        return next(handleResponse(action, null, error))
      })
  }

  function handleResponse(action, data, error) {
    var response = {
      schemaType: model.name,
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }

}