
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authController = {};

//Esta funcion valdrá para poder hacer un login, nos devolverá un token
authController.login = async (req, res) => {
    try {
      //Recogemos email y password
      const email = req.body.email;
      const password = req.body.password;

      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      console.log("soy user.......", user)
  
      if (!user) {
        return res.status(501).json({
          success: true,
          message: "Usuario o email incorrecto",
        });
      }
  
      const isMatch = bcrypt.compareSync(password, user.password);
      console.log(isMatch);
  
      if (!isMatch) {
        return res.status(501).json({
          success: true,
          message: "Contraseña o usuario incorrecto",
        });
      }
  
      //En este punto ya sabemos que el password es correcto, creamos un token
      const token = jwt.sign(
        {
          userId: user.id,
          userName: user.name,
          roleId: user.role_id,
          userSurnames: user.surnames,
          userPhone: user.phone,
          userEmail: user.email
        },
        "kant",
        {
          expiresIn: "4h",
        }
      );

      console.log(user.role_id);
  
      return res.json({
        success: true,
        message: "Usuario logeado",
        token: token,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "El usuario no ha podido logearse",
        error: error.menssage,
      });
    }
};


module.exports = authController;