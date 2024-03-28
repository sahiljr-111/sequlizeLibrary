module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required',
        },
        len: {
          args: [8, 255],
          msg: 'Password must be at least 6 characters long',
        },
      },
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: {
          args: [10, 10],
          msg: 'Contact must be exactly 10 characters',
        },
        isNumeric: {
          msg: 'Contact must contain only numbers',
        },
      },
    },
    course: {
      type: DataTypes.STRING
    },
    semester: {
      type: DataTypes.STRING
    },
    subject: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
  });
  Student.sync({ force: false })
  Student.associate = (models) => {
    Student.hasMany(models.Order, {
      foreignKey: "studentId"
    });
  };

  return Student;
};

