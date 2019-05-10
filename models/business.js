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
    },
    rating: {
        type: [Number],
        required: false
    },
        review: {
        type: [String],
        required: false,
    }
});

module.exports = mongoose.model('Business', BusinessSchema);