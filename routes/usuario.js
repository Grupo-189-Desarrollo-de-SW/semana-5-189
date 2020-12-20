const routerx = require("express-promise-router");

const usuarioController = require('../controllers/UsuarioController');
const router = routerx();

router.post('/login', usuarioController.login);

module.exports= router;