const express = require('express');
const mongoose = require('mongoose');
const businessRouter = require('./routes/businessRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/business', businessRouter);

app.use('/', (_, res) => {
    res.send('Welcome to the Business API!');
});

const port = process.env.PORT || 4444;

mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to reviews DB');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});