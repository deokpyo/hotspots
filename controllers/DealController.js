var Deal = require('../models/Deal');

module.exports = {
    // get request
    find: function (params, callback) {
        Deal.find(params, function (err, deals) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, deals)
        })
    },

    findById: function (id, callback) {
        Deal.findById(id, function (err, deal) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, deal)
        })
    },

    findOneAndUpdate: function(id, params, callback){
        Deal.findOneAndUpdate({
            "_id": id
        }, {
            $push: {
                "user": params._id
            }
        }, function(err, deal){
            if(err) {
                callback(err, null)
                return
            }
            callback(null, deal)
        })
    },

    // post request
    create: function (params, callback) {
        Deal.create(params, function (err, deal) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, deal)
        })
    },

    // put request
    update: function (id, params, callback) {
        Deal.findByIdAndUpdate(id, params, {new:true}, function(err, employee){
            if(err){
                callback(err, null)
                return
            }
            callback(null, employee)
        })
    },

    delete: function (id, callback) {
        Deal.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }
}