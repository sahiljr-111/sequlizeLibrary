const { Book, Student, Order } = require('../models/index')
exports.addBook = async (req, res) => {
  try {
    const data = await Book.create(req.body)
    res.status(200).json({
      staus: true,
      data: data
    })
  } catch (error) {
    console.log('ERROR-ADD Books', error)
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}

exports.viewBook = async (req, res) => {
  try {
    const data = await Book.findAll({})
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-VIEW Books", error);
  }
}

exports.viewBookWithStudent = async (req, res) => {
  try {
    const data = await Book.findAll({
      where: { id: req.params.id },
      include: [{
        model: Order,
        include: [Student]
      }],
    })
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-VIEW STUDENTDetails", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}

exports.updateBook = async (req, res) => {
  try {
    await Book.update(req.body, { where: { id: req.params.id } })
    const data = await Book.findOne({ where: { id: req.params.id } })
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-UPDATE BOOK", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
exports.deleteBook = async (req, res) => {
  try {
    const data = await Book.destroy({ where: { id: req.params.id } })
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-DELETE BOOK", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}