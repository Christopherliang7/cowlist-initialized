const models = require('../models/model.js');

module.exports = {
  get: function(res, req) {
    models.get(function(error, results) {
      if (error) {
        console.log('Controller Error: ', error);
      } else {
        req.json(results);
      }
    })
  },
  post: function(res, req) {
    models.post(function(error, results) {
      if (error) {
        console.log('Controller POST Error: ', error)
      } else {
        res.sendStatus(201);
      }
    })
  }
}