const db = require('../config/database');

class Todo {
    static getAll(callback) {
        db.query('SELECT * FROM todos ORDER BY due_date ASC', callback);
    }

    static create(title, description, due_date, callback) {
        db.query(
            'INSERT INTO todos (title, description, due_date, completed) VALUES (?, ?, ?, 0)',
            [title, description, due_date],
            callback
        );
    }

    static update(id, title, description, due_date, completed, callback) {
        db.query(
            'UPDATE todos SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?',
            [title, description, due_date, completed, id],
            callback
        );
    }

    static delete(id, callback) {
        db.query('DELETE FROM todos WHERE id = ?', [id], callback);
    }
}

module.exports = Todo;