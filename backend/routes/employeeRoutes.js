const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeesController");

router
  .route("/")
  .post(employeeController.addEmployee)
  .get(employeeController.getEmployees);
router
  .route("/:id")
  .get(employeeController.getEmployeeByID)
  .patch(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

module.exports = router;
