const mongoose = require('mongoose');
let Todo = new Schema({
        type: String
    todo_responsible: {
    },
        type: String
    todo_completed: {
    }
module.exports = mongoose.model('Todo', Todo);
