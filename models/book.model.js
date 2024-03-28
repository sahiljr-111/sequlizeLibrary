module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    book_name: {
      type: DataTypes.STRING
    },
    book_category: {
      type: DataTypes.STRING
    },
    book_price: {
      type: DataTypes.INTEGER
    },
    author: {
      type: DataTypes.STRING
    }
  })
  Book.sync({ force: false })
  Book.associate = (models) => {
    Book.hasMany(models.Order, {
      foreignKey: "bookId"
    });
  };
  return Book
}