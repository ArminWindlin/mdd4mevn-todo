const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: 'Please enter the text of the Todo',
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    isDone: {
        type: Boolean,
        default: false
    },
});

exports.Todo = mongoose.models.todos || mongoose.model('todos', TodoSchema);