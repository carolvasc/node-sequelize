const express = require('express');

const app = express();

const {User} = require('./app/models');

app.use(express.urlencoded({ extended: false }));

User.create({name: 'Carol', email: 'cvsouza04@gmail.com', password: '123456'});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);