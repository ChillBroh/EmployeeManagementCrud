const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
  empID: {
    type: String,
    required: true,
  },
  empName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: numbver,
    required: true,
  },
  bonus: {
    type: Number,
    required: true,
  },
  ETFcollection: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  netSalary: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const Employees = mongoose.Model("Employees", employeesSchema);
module.exports = Employees;
