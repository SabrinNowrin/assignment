const express = require('express')
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    database:'employeesystem'
});

app.post('/create', (req, res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log("Request Received");
    console.log(firstname);
    console.log(req.body);
    db.query(
    `INSERT INTO employees (firstname, lastname) VALUES('${firstname}', '${lastname}')`,
     (err, result)=> {
        if(err){
            console.log(err);
        }else{
            res.send({ success: true });
        }
     }
     );
});
//Sequelizer using through Nodejs create db & table

app.listen(3001, ()=>{
    console.log("Yay, your server is running");
});
