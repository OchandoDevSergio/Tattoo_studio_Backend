
  const isArtist = (req, res, next) => {

    console.log("SATANASSSSS PUTAAAAAAA",req.roleId);

    try {
      if (req.roleId !== 3) {

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



  module.exports = isArtist;