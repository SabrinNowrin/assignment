module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        }
      }
    }
  });
  return Employee;
};