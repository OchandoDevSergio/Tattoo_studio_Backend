
const { PaymentData } = require('../models');

const paymentDatasController = {};

paymentDatasController.getAllPaymentDatas = async (req, res) => {

    try {

        const allPaymentDatas = await PaymentData.findAll();

        return res.json({
            success: true,
            message: "Datos de pago de todos los clientes recuperados",
            data: allPaymentDatas,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}

paymentDatasController.createNewPaymentData = async (req, res) => {
  try {

    const newPaymentData = await PaymentData.create({
      cardNumber: req.body.cardNumber,
      validThru: req.body.validThru
    });

    return res.send(newPaymentData);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear los datos de pago",
      error: error.message,
    });
  }
}

paymentDatasController.modifyPaymentData = async (req, res) => {
  let body = req.body;

  try {

      const updatePaymentData = await PaymentData.update(
        {
          cardNumber: req.body.cardNumber,
          validThru: req.body.validThru
      },
      {
                where: {
          id: body.id
        }
      }
      );


      return res.json({
        success: true,
        message: "Los datos de pago del cliente han sido actualizados",
        data: updatePaymentData,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar los datos de pago del cliente",
        error: error.message,
      }); 
  }
}

paymentDatasController.deletePaymentData = async (req, res) => {

    let body = req.body;

    try {
        const deletePaymentData = await PaymentData.destroy({
          where: {
            id: body.id
          },
        });
        return res.json({
          success: true,
          message: "Los datos de pago del cliente han sido eliminados",
          data: deletePaymentData,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Los datos de pago del cliente no han podido ser eliminados",
          error: error.message,
        });
      }
    

}

module.exports = paymentDatasController;