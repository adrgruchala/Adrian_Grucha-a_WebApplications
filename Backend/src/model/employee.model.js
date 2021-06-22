'use strict';
var dbConn = require('../config/db.config');

//Employee object create
var Employee = function (employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.author = employee.author;
    this.isbn = employee.isbn;
};
Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO books set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            dbConn.query("Select * from books where id = ? ", res.insertId, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
        }
    });
};
Employee.findById = function (id, result) {
    dbConn.query("Select * from books where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Employee.findAll = function (result) {
    dbConn.query("Select * from books", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('books : ', res);
            result(null, res);
        }
    });
};
Employee.update = function (id, employee, result) {
    dbConn.query("UPDATE books SET name=?,author=?,isbn=? WHERE id = ?", [employee.name, employee.author, employee.isbn, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM books WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Employee.findByName = function (name, result) {
    const likeName = "%" + name + "%";
    dbConn.query("SELECT * FROM books b WHERE b.name LIKE  ?", [likeName], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
module.exports = Employee;
