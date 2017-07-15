var mongoose = require('mongoose')

var DealSchema = new mongoose.Schema({
    price: {
        type: String,
        trim: true,
        required: true,
    },
    location: {
        type: String,
        default: ''
    },
    rating: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('DealSchema', DealSchema)