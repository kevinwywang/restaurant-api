const express = require('express');
const Business = require('../models/business');

const businessRouter = express.Router();

businessRouter.post('/', (req, res) => {
    let business = new Business();
    business.name = req.body.name;
    business.address = {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    }
    business.rating = req.body.rating;
    Business.find({name: req.body.name}, (_, document) => {
        if (document.length){
            res.status(400).send('Business already exists. Could not create business.');
        } else {
            business.save((err, document) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.send(`Saved your business!\n${document}`);
                }
            });
        }
    })

});

businessRouter.get('/', (_, res) => {
    Business.find((err, documents) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(documents);
        }
    });
});

businessRouter.delete('/:name', (req, res) => {
    Business.deleteOne({
        name: req.params.name
    }, (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`You successfully deleted all: ${req.params.name}`);
        }
    });
});

module.exports = businessRouter;