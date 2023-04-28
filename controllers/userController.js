const ApiError = require("../errors/apiErrors");

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      next(ApiError.badRequest("No id were provided"));
    }

    res.json(id);
  }
}

module.exports = new UserController();
