var Spot = require('../models/Spot');

module.exports = {
    // get request
    find: function (params, callback) {
        Spot.find(params, function (err, spots) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, spots)
        })
    },

    findById: function (id, callback) {
        Spot.findById(id, function (err, spot) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, spot)
        })
    },

    findOneAndUpdate: function(id, params, callback){
        Spot.findOneAndUpdate({
            "_id": id
        }, {
            $push: {
                "user": params._id
            }
        }, function(err, spot){
            if(err) {
                callback(err, null)
                return
            }
            callback(null, spot)
        })
    },

    // post request
    create: function (params, callback) {
        Spot.create(params, function (err, spot) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, spot)
        })
    },

    // put request
    update: function (id, params, callback) {
        Spot.findByIdAndUpdate(id, params, {new:true}, function(err, spot){
            if(err){
                callback(err, null)
                return
            }
            callback(null, spot)
        })
    },

    delete: function (id, callback) {
        Spot.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }
}