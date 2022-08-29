

var mongoose = require('mongoose');

var registerSchema = mongoose.Schema ({

    ID: {
        type: Number
    },

    Name: {
        type: String
    },

    Surname: {
        type: String
    }

});

var registerModel = mongoose.model('Students', registerSchema);

module.exports = registerModel