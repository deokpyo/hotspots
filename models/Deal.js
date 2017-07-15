var mongoose = require('mongoose')

var DealSchema = new mongoose.Schema({
    price: {
        type: String,
        trim: true,
        required: true,
    },
    deal: {
        type: String,
        trim: true,
        required: true,
    },
    location: {
        type: String,
        default: '',
        required: true
    },
    rating: {
        type: String,
        default: '',
        required: true,
    },
    image: {
        type: String,
        default: '',
        required: true,
    }
})

module.exports = mongoose.model('DealSchema', DealSchema)