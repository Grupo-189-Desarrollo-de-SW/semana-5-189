var jwt = require("jsonwebtoken");
const models = require("../models");

async function checkToken(token) {
  let _id = null;
  try {
    const { id } = await jwt.decode(token);
    _id = id;
  } catch (error) {
    return false;
  }

  const user = models.Usuario.findOne({ where: { id: _id, estado: 1 } });
  if (user) {
    const token = encode(user.id,user.rol);
    return token;
  } else {
    return false;
  }
}

module.exports = {
  //generar el token
  encode: async (id, rol) => {
    const token = jwt.sign(
      {
        id,
        rol,
      },
      "secretKeyToGenerateToken",
      { expiresIn: "1d" }
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      const { id } = jwt.verify(token, "secretKeyToGenerateToken");
      const user = await models.Usuario.findOne({ where: { id, estado: 1 } });

      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (error) {
      const newToken = await checkToken(token);
      return newToken;
    }
  },
};
