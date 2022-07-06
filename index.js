const mongoose = require('mongoose')
const Joi = require('joi');
const genres = require('./routes/genres');
const customers = require('./routes/customers')
const express = require('express');
const app = express();

// This is a commment

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB..!'))
    .catch((err) => console.error(`Couldn't connect to MongoDB..!`))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));