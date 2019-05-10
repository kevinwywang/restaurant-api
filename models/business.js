const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const BusinessSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            enum: statesArray
        },
        zip: {
            type: String,
            minlength: [5, 'Nothing shorter than 5 digits']
        },
        required: false
    }
});

const ReviewSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [1, 'Nothing below 1'],
        max: [5, 'Nothing above 5'],
        validate: {
            validator: Number.isInteger,
            message: 'Rating needs to be an integer'
        },
        required: true
    },
    review: {
        type: String,
        maxlength: [1000, 'Max number of characters is 1000. Your review is too long!'],
        required: false
    }
});

module.exports = mongoose.model('Business', BusinessSchema);
module.exports = mongoose.model('Review', ReviewSchema);