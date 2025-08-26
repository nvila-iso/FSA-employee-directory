import express from "express";
import employees from "./db/employees.js";
const app = express();
export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  // create a random number based on the amount of employees
  const random = Math.floor(Math.random() * employees.length + 1);
  res.send(employees[random]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((element) => element.id === +id);
  if (!employee) {
    return res.status(404).send("There is no employee by that id.");
  }
  res.send(employee);
});
