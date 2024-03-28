module.exports = (sequelize, DataTypes) => {
  const Librarian = sequelize.define('Librarian', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  Librarian.sync({ force: false })
  return Librarian;
};
