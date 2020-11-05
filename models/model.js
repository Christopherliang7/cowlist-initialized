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
    let postquery = "INSERT INTO cows(id, cow_name, cow_description) VALUES (5, 'Sandra', 'Friendly');";
    db.query(postquery, (error, result) => {
      if (error) {
        console.log('Error with POST request: ', error)
      } else {
        res.send('Testing Testing');
      }
    })
  }
};