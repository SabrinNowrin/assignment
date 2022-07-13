# Pre-requirement
1. Install Lastest version of node
2. Install mySQL server
3. GP to /client-Two &
 run `npm install`
, then run `npm start`
4. Go to /serverTwo & 
run `npm install`
after that, run `node server.js`
5. While at serverTwo, get to config/db.config.js & set the USER & PASSWORD according to your mySQL setup.
6. Your MySQL need to have a schema named 'employeesystem'
7. For testing the email, go to serverTwo/controllers/employee.controller.js and set the user & pass under the transporter constant.
