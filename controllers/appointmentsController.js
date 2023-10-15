
const { Appointment, Artist, User } = require('../models');

const appointmentsController = {};

appointmentsController.getAllAppointments = async (req, res) => {

    try {

        const allAppointments = await Appointment.findAll(
          {
            include : [
              {
                model: Artist,
                required: false,
                attributes: {
                  exclude : ['id','user_id','portfolio','updatedAt','createdAt'],
                  include: ['name']
                }
              },
              {
                model: User,
                required: false,
                attributes: {
                  exclude : ['id','password','role_id','updatedAt','createdAt'],
                  include: ['name','surnames','phone','email']
                }
              }
            ]
          }
        );

        return res.json({
            success: true,
            message: "Datos de todas las citas recuperados",
            data: allAppointments,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}

appointmentsController.getCustomerAppointments = async (req, res) => {

  try {

      const allAppointments = await Appointment.findAll(
        {
          where: { user_id: { [Op.like]: `%${req.params.userId}%` } },
          include : [
            {
              model: Artist,
              required: false,
              attributes: {
                exclude : ['id','user_id','portfolio','updatedAt','createdAt'],
                include: ['name']
              }
            },
            {
              model: User,
              required: false,
              attributes: {
                exclude : ['id','password','role_id','updatedAt','createdAt'],
                include: ['name','surnames','phone','email']
              }
            }
          ]
        }
      );

      return res.json({
          success: true,
          message: "Datos de todas las citas recuperados",
          data: allAppointments,
      });


  } catch (error) {

      return res.status(500).json({
          success: false,
          message: "Los datos no han podido ser recuperados",
          error: error.message,
      });

  }

}

appointmentsController.getArtistAppointments = async (req, res) => {

  try {

      const allAppointments = await Appointment.findAll(
        {
          where: { artist_id: { [Op.like]: `%${req.params.artistId}%` } },
          include : [
            {
              model: Artist,
              required: false,
              attributes: {
                exclude : ['id','user_id','portfolio','updatedAt','createdAt'],
                include: ['name']
              }
            },
            {
              model: User,
              required: false,
              attributes: {
                exclude : ['id','password','role_id','updatedAt','createdAt'],
                include: ['name','surnames','phone','email']
              }
            }
          ]
        }
      );

      return res.json({
          success: true,
          message: "Datos de todas las citas recuperados",
          data: allAppointments,
      });


  } catch (error) {

      return res.status(500).json({
          success: false,
          message: "Los datos no han podido ser recuperados",
          error: error.message,
      });

  }

}


appointmentsController.createNewAppointment = async (req, res) => {
  try {

    const newAppointment = await Appointment.create({
      user_id: req.body.user_id,
      artist_id: req.body.artist_id,
      date: req.body.date,
      hour: req.body.hour,
    });

    return res.send(newAppointment);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear la cita",
      error: error.message,
    });
  }
}

appointmentsController.modifyAppointment = async (req, res) => {
  let body = req.body;

  try {

      const updateAppointment = await Rental.update(
        {
          user_id: req.body.user_id,
          artist_id: req.body.artist_id,
          date: req.body.date,
          hour: req.body.hour,
      },
      {
                where: {
          id: body.id
        }
      }
      );


      return res.json({
        success: true,
        message: "La cita ha sido actualizada",
        data: updateAppointment,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar la cita",
        error: error.message,
      }); 
  }
}

appointmentsController.deleteAppointment = async (req, res) => {

  let appointmentId = req.params.erase;

    try {
        const deleteAppointment = await Appointment.destroy({
          where: {
            id: appointmentId
          },
        });
        return res.json({
          success: true,
          message: "La cita ha sido eliminada",
          data: deleteAppointment,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "La cita no ha podido ser eliminada",
          error: error.message,
        });
      }
    

}

module.exports = appointmentsController;