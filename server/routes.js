const todo = require('./controller/todoC');
const user = require('./controller/userC');

exports.routes = (app) => {

    app.route('/todo')
    .get(todo.getTodos);

    app.route('/todo')
    .post(todo.postTodo);

    app.route('/todo/:id')
    .get(todo.getTodo);

    app.route('/todo/:id')
    .delete(todo.deleteTodo);

    app.route('/todo/:id')
    .put(todo.putTodo);

    app.route('/user')
    .get(user.getUsers);

    app.route('/user')
    .post(user.postUser);

    app.route('/user/:id')
    .get(user.getUser);

    app.route('/user/:id')
    .delete(user.deleteUser);

    app.route('/user/:id')
    .put(user.putUser);

    app.route('/login')
    .put(user.login);

    app.route('/register')
    .post(user.register);

    app.route('/current-user')
    .get(user.getCurrentUser);

    // Health check
    app.route('/')
    .get((req, res) => res.send('Success'));

};
