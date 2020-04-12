const User = require("../model/User");
const { Op } = require("sequelize");

class ReportController {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@hotmail.com",
        },
      },
      include: [
        { association: "addresses", where: { streat: "Rua CC-15" } },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
        },
      ],
    });
    return res.json(users);
  }
}

module.exports = new ReportController();
