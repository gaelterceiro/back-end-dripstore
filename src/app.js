const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

app.use('/api', userRoutes.router);
app.use('/api', categoryRoutes.router);

module.exports = app;