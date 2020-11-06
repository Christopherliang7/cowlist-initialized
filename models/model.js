const db = require('../db/mysql.js').dbConnection;

module.exports = {
  get: function(req, res) {
    // getting from database
    let getquery = 'SELECT * FROM cows;';
    db.query(getquery, function(error, result) {
      if (error) {
        console.log('Error with GET request: ', error)
      } else {
        res.send(result);
      }
    })
  },
  post: function(req, res) {
    // storing into database
    let postquery = "INSERT INTO cows(cow_name, cow_description) VALUES (?, ?);";
    console.log(req.body);
    db.query(postquery, [req.body.cow_name, req.body.cow_description], (error, result) => {
      if (error) {
        console.log('Error with POST request: ', error)
      } else {
        res.send('Success with POST request!');
      }
    })
  }
};