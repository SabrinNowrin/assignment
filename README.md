# Pre-requirement
1. Install Lastest version of node
2. Install MySQL server
3. Go to serverTwo/config/db.config.js & set the USER & PASSWORD according to your mySQL setup.
4. Your MySQL need to have a schema named 'employeesystem'
5. For testing the email, go to serverTwo/controllers/employee.controller.js and set the user & pass under the transporter constant.
6. Go to /serverTwo & 
run `npm install`
after that, run `node server.js`
7. Go to /client-Two &
 run `npm install` (If you run through an error about dependency, try with this command first `npm install --legacy-peer-deps`)
, then run `npm start`. 
