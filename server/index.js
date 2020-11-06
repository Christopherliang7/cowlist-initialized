const express = require('express')
const db = require('../db/mysql.js').dbConnection;
const models = require('../models/model.js');
// const cors = require('cors')
// const controllers = require('../controllers/controller.js')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('./client/dist'));
// app.use(cors());

db.connect();

// app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/cows', (req, res) => {
  // stores cow info into database
  models.post(req, res);
});

app.get('/api/cows', (req, res) => {
  // get cow information and return into array
  models.get(req, res);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))