const Address = require("../model/Address");
const User = require("../model/User");

class AddressController {
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id,{include: {
      association: 'addresses'
    }});

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    return res.json(user.addresses);
  }
  async store(req, res) {
    const { user_id } = req.params;
    

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const address = await Address.create({ ...req.body, user_id });

    return res.json(address);
  }
}
module.exports = new AddressController();
