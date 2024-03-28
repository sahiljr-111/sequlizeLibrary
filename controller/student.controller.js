const { Student, Order, Book } = require('../models/index')

exports.loginStudent = async (req, res) => {
  try {
    const data = await Student.findOne({ where: { email: req.body.email } })
    if (data) {
      if (data.password == req.body.password) {
        res.status(200).json({
          status: true,
          data: data
        })
      } else {
        res.statusF(200).json({
          status: false,
          error: "incorrect password!"
        })
      }
    } else {
      res.statusF(200).json({
        status: false,
        error: "incorrect email!"
      })
    }
  } catch (error) {
    console.log("student-login-ERROR:", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}

exports.addStudent = async (req, res) => {
  try {
    const data = await Student.create(req.body)
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("add-student-error:", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}

exports.viewStudentWithBook = async (req, res) => {
  try {
    const data = await Student.findAll({
      where: { id: req.params.id },
      include: [{
        model: Order,
        include: [Book]
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

exports.viewStudent = async (req, res) => {
  try {
    const data = await Student.findAll({})
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-VIEW STUDENT", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}

exports.updateStudent = async (req, res) => {
  try {
    await Student.update(req.body, { where: { id: req.params.id } })
    const data = await Student.findOne({ where: { id: req.params.id } })
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-UPDATE STUDENT", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
exports.deleteStudent = async (req, res) => {
  try {
    const data = await Student.destroy({ where: { id: req.params.id } })
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-DELETE STUDENT", error);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}