const { Librarian } = require('../models/index')
exports.loginLibrarian = async (req, res) => {
  try {
    const { email, password } = req.body;
    const librarian = await Librarian.findOne({ where: { email: email } });

    if (librarian) {
      console.log("---", librarian.password);
      if (librarian.password === password) {
        res.status(200).json({
          status: true,
          message: librarian
        });
      } else {
        res.status(200).json({
          status: false,
          message: "Password incorrect"
        });
      }
    } else {
      res.status(200).json({
        status: false,
        message: "Email incorrect"
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message
    });
  }
};