const express = require('express')
const db = require('../db/mysql.js').dbConnection;

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('./client/dist'))

db.connect();

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/cows', (req, res) => {
  // stores cow info into database
});

app.get('/api/cows', (req, res) => {
});


app.listen(port, () => console.log(`App listening on port ${port}!`))