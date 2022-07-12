const db = require("../models/index.js");
const Employee = db.employees;
const nodemailer = require("nodemailer");
const Op = db.Sequelize.Op;

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "09ce3257bc5f52",
    pass: "1892f7f9288acb"
  }
});

const getPagination = (page, size) => {
  let limit = 5;
  let offset =0;
  page = parseInt(page);
  size = parseInt(size);
  if(size == 0){
    throw 'Size can not be zero';
  }else{
     limit = size ? size : 5;
  }

  if(page == 0){
    throw 'Page can not be zero';
  }else{
      offset = page ? (page -1) * limit : 0;
  }
  //console.log(page, size);
  return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: employees } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, employees, totalPages, currentPage };
};



// Create and Save a new Tutorial
exports.create = (req, res) => {
    console.log("Create method has been called");

  const employee = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  };
  // Save Tutorial in the database
  Employee.create(employee)
    .then(data => {
      res.send({"success": true});
    })
    .catch(err => {
      res.send({
        "success": false
      });
    });
};

exports.findAll = (req, res) => {
  const { page, size } = req.query;
  let limit = 5;
  let offset = 0;
  try{
    const vals = getPagination(page, size);
    limit = vals.limit;
    offset = vals.offset;
  } catch(e){
    res.send({"message":e});
    return;
  }
  Employee.findAndCountAll({ limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.upload = (req, res) => {
  console.log("Executing Upload");
  console.log(req.body.fileContent);
  Employee.bulkCreate(req.body.fileContent,{
    ignoreDuplicates: true,
    returning: true
  }).then((response) => { 
    console.log(response);
    res.send({"success":true});
  
}).catch(err => {
    console.log(err);
      res.send({
        "success": false
      });
    });
};

exports.emailSend = async (req, res) =>{
  const emails = {
    emailids : req.body.emailids,
    emailsub : req.body.emailsub,
    emailbody : req.body.emailbody
  }
  console.log(emails);
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: emails.emailids, // list of receivers
    subject: emails.emailsub, // Subject line
    text: emails.emailbody, // plain text body
  });
  console.log(info);
  res.send({"message":true});
}