const Employees = require("../models/employeeModal");

const addEmployee = async (req, res, next) => {
  try {
    const {
      empID,
      empName,
      parkId,
      position,
      basicSalary,
      bonus,
      ETFcollection,
      tax,
      netSalary,
    } = req.body;

    const newEmployee = await new Employees({
      empID,
      empName,
      parkId,
      position,
      basicSalary,
      bonus,
      ETFcollection,
      tax,
      netSalary,
      createdAt: new Date(),
    });
    const savedEmployee = await newEmployee.save();
    res.status(201).json({
      status: "success",
      message: savedEmployee,
    });
  } catch (error) {
    next(error);
  }
};

const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employees.find();
    res.status(200).json({
      status: "success",
      message: employees,
    });
  } catch (error) {
    next(error);
  }
};
const getEmployeeByID = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const employee = await Employees.findOne({ empID: id });
    if (!employee) {
      throw new Error("Employee Not found!");
    }
    res.status(200).json({
      status: "success",
      message: employee,
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  const { id } = req.params;

  try {
    const employee = await Employees.findOne({ empID: id });
    if (!employee) {
      throw new Error("Employee Not found!");
    }
    const employeeUpdate = await Employees.findOneAndUpdate(
      { empID: id },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: employeeUpdate,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await Employees.findOneAndDelete({ empID: id });
    if (!employee) {
      throw new Error("Employee Not found!");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addEmployee,
  deleteEmployee,
  getEmployeeByID,
  getEmployees,
  updateEmployee,
};
