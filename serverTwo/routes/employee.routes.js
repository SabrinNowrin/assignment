module.exports = app => {
  const employees = require("../controllers/employee.controller.js");
  var router = require("express").Router();

  // Create a new Route to create which is post
  router.post("/", employees.create);

  //Create a new Route to show which is get
  router.get("/show", employees.findAll);

  //Creating a upload API
  router.post('/upload', employees.upload);

  app.use('/api/employees', router);
  };