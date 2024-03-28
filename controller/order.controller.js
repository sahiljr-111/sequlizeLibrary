const { Order, Student, Book } = require('../models/index')
exports.addOrders = async (req, res) => {
  try {
    const data = await Order.create(req.body)
    res.status(200).json({
      staus: true,
      data: data
    })
  } catch (error) {
    console.log('ERROR-ADD Orders', error)
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}


exports.viewOrders = async (req, res) => {
  try {
    const data = await Order.findAll({
      include: [
        {
          model: Student,
        },
        {
          model: Book,
        }
      ],
    });
    res.status(200).json({
      status: true,
      data: data
    });
  } catch (error) {
    console.log("ERROR-VIEW Orders", error);
    res.status(500).json({
      status: false,
      error: 'Internal server error',
      message: error
    });
  }
}
