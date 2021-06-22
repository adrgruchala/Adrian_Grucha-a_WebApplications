'use strict';
const Employee = require('../model/employee.model');
exports.findAll = function (req, res) {
    Employee.findAll(function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};
exports.create = function (req, res) {
    const new_employee = new Employee(req.body);
    console.log(req.body)
//handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});
    } else {
        Employee.create(new_employee, function (err, employee) {
            if (err)
                res.send(err);
            res.json(employee);
        });
    }
};
exports.findById = function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        console.log("Fetching Employee with id: " + req.params.id + "\n" + employee + "\n");
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.update = function (req, res) {
    console.log('put request')
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});
    } else {
        Employee.update(req.params.id, new Employee(req.body), function (err, employee) {
            if (err)
                res.send(err);
            res.json({error: false, message: 'Employee successfully updated'});
        });
    }
};
exports.delete = function (req, res) {
    Employee.delete(req.params.id, function (err, employee) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'Employee successfully deleted'});
    });
};

exports.getByName = function (req, res) {
    Employee.findByName(req.params.name, function (err, employee) {
        console.log('exports.getByName')
        console.log(req.params.name)
        if (err)
            res.send(err);
        res.json(employee);
    });
};
