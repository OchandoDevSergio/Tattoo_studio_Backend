const { Role } = require("../models");

const rolesController = {};

rolesController.getAllRoles = async (req, res) => {
  try {
    const allRoles = await Role.findAll();

    return res.json({
      success: true,
      message: "Todos los roles recuperados",
      data: allRoles,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Los roles no han podido ser recuperados",
      error: error.message,
    });
  }
};

rolesController.createNewRole = async (req, res) => {
  try {


    const newRole = await User.create({
      name: req.body.name,
    });

    return res.send(newRole);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear el rol",
      error: error.message,
    });
  }
};

RolesController.modifyRole = async (req, res) => {
  let body = req.body;

  try {

      const updateRole = await Role.update(
        {
          name: req.body.name,
      },
      {
                where: {
          id: body.id
        }
      }
      );


      return res.json({
        success: true,
        message: "El rol ha sido actualizado",
        data: updateRole,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar los datos del rol",
        error: error.message,
      }); 
  }
};

rolesController.deleteRole = async (req, res) => {
  let body = req.body;

  try {
    const deleteRole = await Role.destroy({
      where: {
        id: body.id,
      },
    });
    return res.json({
      success: true,
      message: "El rol ha sido eliminado",
      data: deleteRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El rol no ha podido ser eliminado",
      error: error.message,
    });
  }
};

module.exports = rolesController;
