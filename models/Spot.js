var mongoose = require('mongoose')

var SpotSchema = new mongoose.Schema({
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
    rooms: {
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

module.exports = mongoose.model('SpotSchema', SpotSchema)