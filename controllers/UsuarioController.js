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
          let tokenReturn = await token.encode(user.id, user.rol);
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

  // Listar todos los usuarios
  list: async (req, res, next) => {
    try {
      const reg = await models.Usuario.findAll();
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Se ha producido un error",
      });
      next(error);
    }
  },

  //nos permite agregar un nuevo usuario
  add: async (req, res, next) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10); //10 numero de veces que encriptara la contraseña
      const reg = await models.Usuario.create(req.body);
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },

  //actualizar un usuario especifico según su id
  update: async (req, res, next) => {
    try {
      const reg = await models.Usuario.update(
        {
          nombre: req.body.nombre,
          email: req.body.email,
          //rol: req.body.rol,
          //password: bcrypt.hashSync(req.body.password, 10),
        },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },

  //cambiar al estado activo(1) el usuario
  activate: async (req, res, next) => {
    try {
      const reg = await models.Usuario.update(
        { estado: 1 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },

  //cambiar al estado desactivado(0) el usuario
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.Usuario.update(
        { estado: 0 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },
};
