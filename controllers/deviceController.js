const uuid = require("uuid");
class DeviceController {
  async create(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + ".jpg";
  }
  async getAll(req, res) {}
  async getOne(req, res) {
    const query = req.query;
  }
}

module.exports = new DeviceController();
