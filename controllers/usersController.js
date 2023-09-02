const { User } = require("../models");
const bcrypt = require('bcrypt')

const usersController = {};

usersController.getAllUsers = async (req, res) => {

  try {
    const allUsers = await User.findAll();

    return res.json({
      success: true,
      message: "Datos de todos los clientes recuperados",
      data: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los datos no han podido ser recuperados",
      error: error.message,
    });
  }
};

usersController.createNewUser = async (req, res) => {
  try {
    
    //A continuación podemos observar expresiones regulares, este tipo de 
    //expresiones las podemos encontrar en internet ya configuradas,
    //sirven para devolvernos true o false al COMPARAR un valor con las propias
    //expresiones, en caso de que el valor cumpla con el formato devolverá true.
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/;

    if (!checkEmail.test(req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "El correo no es valido",
      });
    }

    if (!regex.test(req.body.password)) {
      return res.json({
        success: true,
        message:
          "La contraseña debe tener una mayúscula, una minúscula y un número. Su longitud nunca puede ser inferior a 4.",
      });
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8);

    const newUser = await User.create({
      role_id: req.body.role_id,
      name: req.body.name,
      surnames: req.body.surnames,
      dni: req.body.dni,
      email: req.body.email,
      phone: req.body.phone,
      password: newPassword
    });

    return res.send(newUser);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear la cuenta",
      error: error.message,
    });
  }
};

usersController.modifyUser = async (req, res) => {
  let body = req.body;

  console.log(req.body.role_id);

  try {

      const updateUser = await User.update(
        {
          role_id: req.body.role_id,
          name: req.body.name,
          surnames: req.body.surnames,
          dni: req.body.dni,
          email: req.body.email,
          phone: req.body.phone
      },
      {
                where: {
          id: body.id
        }
      }
      );

      const dataAnswer = {
        roleId: req.body.role_id,
        userId: body.id,
        userName: req.body.name,
        userSurnames: req.body.surnames,
        userPhone: req.body.phone,
        userDni: req.body.dni,
        userEmail: req.body.email
        
      }
      

      return res.json({
        success: true,
        message: "El cliente ha sido actualizado",
        data: dataAnswer,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar los datos del usuario",
        error: error.message,
      }); 
  }
};

usersController.deleteUser = async (req, res) => {
  let body = req.body;

  try {
    const deleteUser = await User.destroy({
      where: {
        id: body.id,
      },
    });
    return res.json({
      success: true,
      message: "El cliente ha sido eliminado",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El cliente no ha podido ser eliminado",
      error: error.message,
    });
  }
};

module.exports = usersController;
