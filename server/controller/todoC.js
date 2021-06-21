const { Todo } = require('../model/Todo');

exports.getTodos = async (req, res, next) => {
    try {
        const todos = (await Todo.find({userId: req.userId}))
            .map(doc => doc.toObject());
        res.send(todos);
    } catch (err) {
        return next(err);
    }
};
exports.postTodo = async (req, res, next) => {
    try {
        // connect to user
        if (req.userId) {
            req.body.userId = req.userId;
        }
        const todo = new Todo(req.body);
        todo.save((err, task) => {
        if (err) return next(err);
            res.send(todo);
        });
    } catch (err) {
        return next(err);
    }
};
exports.getTodo = async (req, res, next) => {
    try {
        Todo.findOne({ _id: req.params.id }, (err, todo) => {
            if (err) return next(err);
            res.send(todo);
        });
    } catch (err) {
        return next(err);
    }
};
exports.deleteTodo = async (req, res, next) => {
    try {
        Todo.deleteOne({ _id: req.params.id }, (err) => {
            if (err) return next(err);
            res.send({ info: 'Deleted a todo!' });
        });
    } catch (err) {
        return next(err);
    }
};
exports.putTodo = async (req, res, next) => {
    try {
        Todo.updateOne({ _id: req.params.id }, {$set: req.body}, (err, updateInfo) => {
            if (err) return next(err);
            res.send('Successfully updated');
        });
    } catch (err) {
        return next(err);
    }
};
