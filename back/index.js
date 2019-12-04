const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Welcome to Express');
});

app.get('/children', (request, response) => {
  connection.query('SELECT * from child', (err, results) => {
    if (err) {
      response.status(500).send('Error retrieving children');
    } else {
      response.json(results);
    }
  });
})

app.post('/children', (request, response) => {
  const formData = request.body;

  connection.query('INSERT INTO child SET ?', formData, (err, results) => {

    if (err) {
      console.log(err);
      response.status(500).send("Erreur lors de la sauvegarde d'un employé");
    } else {
      response.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
