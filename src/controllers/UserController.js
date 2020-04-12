const User = require("../model/User");
class UserController {
  async index(req, res) {
    const user = await User.findAll();
    return res.json(user);
  }
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }
}
module.exports = new UserController();
