
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

 try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(501).json({
        success: true,
        message: "No tienes permiso para continuar",
      });
    }

    const token = bearerToken.split(" ")[1];

    const decoded = jwt.verify(token, "kant");

    req.userId = decoded.userId;
    req.roleId = decoded.roleId;

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Token invalido",
      error: error.message,
    });
  }
};

module.exports = auth;