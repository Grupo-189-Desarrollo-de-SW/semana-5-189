const models = require("../models");
var bcrypt = require("bcryptjs");
const token = require("../services/token");

module.exports = {
  login: async (req, res, next) => {
    try {
      let user = await models.Usuario.findOne({
        where: { email: req.body.email, estado: 1 },
      });
      if (user) {
        let match = bcrypt.compareSync(req.body.password, user.password);
        if (match) {
          let tokenReturn = await token.encode(user.id,user.rol);
          return res.status(200).json({ user, tokenReturn });
        } else {
          return res.status(401).send({
            auth: false,
            accessToken: null,
            reason: "Invalid Password!",
          });
        }
      } else {
        return res.status(404).send({
          message: "User Not Found.",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
