const models = require("../models");

module.exports = {
  //listar todas los articulos
  list: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findAll({
        include: [
          {
            model: models.Categoria,
            as: "categoria",
            attributes: ["id", "nombre", "descripcion"],
          },
        ],
      });
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "No hay articulos registrados",
      });
      next(error);
    }
  },

  //nos permite agregar un nuevo articulo
  add: async (req, res, next) => {
    try {
      const reg = await models.Articulo.create(req.body);
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(error);
    }
  },

  //actualizar un articulo especifico según su id
  update: async (req, res, next) => {
    try {
      const reg = await models.Articulo.update(
        { 
          nombre: req.body.nombre, 
          descripcion: req.body.descripcion, 
          codigo: req.body.codigo,
          categoriaId: req.body.categoria
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

  //cambiar al estado activo(1) el articulo
  activate: async (req, res, next) => {
    try {
      const reg = await models.Articulo.update(
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

  //cambiar al estado desactivado(0) la categoria
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.Articulo.update(
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
