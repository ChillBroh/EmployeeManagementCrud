const Employees = require("../models/employeeModal");

const addEmployee = (req, res, next) => {
  res.status(201).json({
    status: "success",
    message: "EMployee added",
  });
};

const getEmployees = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "All Employess",
  });
};
const getEmployeeByID = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Employes",
  });
};

const updateEmployee = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Employee updated",
  });
};

const deleteEmployee = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Employee Deleted",
  });
};
module.exports = {
  addEmployee,
  deleteEmployee,
  getEmployeeByID,
  getEmployees,
  updateEmployee,
};
