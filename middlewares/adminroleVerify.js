
  const isAdmin = (req, res, next) => {
    console.log(req.roleId);


    try {
      if (req.roleId !== 1) {
        console.log(`El role_id es ${roleId}`)
        return res.status(501).json({
          success: true,
          message: "No tienes permisos para realizar esta acción",
        });
      }
  
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        massage: "No se ha podido realizar la acción",
        error: error.message,
      });
    }
  };



  module.exports = isAdmin;