const mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Can not leave the name field blank"
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;


//name
//completed
//created_date