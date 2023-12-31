
const { Design, Artist, Sequelize } = require('../models');

const artistsController = {};

artistsController.searchArtistDesigns = async (req, res) => {
  const Op = Sequelize.Op;

  try {

    const artists = await Artist.findAll(
      {
        where: { user_id: { [Op.like]: `%${req.params.userId}%` } },
        include : [
          {
            model: Design,
            required: false,
            attributes: {
              exclude : ['updatedAt','createdAt'],
              include: ['id','style','picture','artist_id']
            }
          }
        ]
      }
    );

    return res.json({
      success: true,
      data: artists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se han encontrado los tatuajes",
      error: error.message,
    });
  }
};

artistsController.getAllArtists = async (req, res) => {

    try {

        const allArtists = await Artist.findAll();

        return res.json({
            success: true,
            message: "Datos de todos los artistas recuperados",
            data: allArtists,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });

    }

}

artistsController.createNewArtist = async (req, res) => {
  try {

    const newArtist = await Artist.create({
      user_id: req.body.user_id,
      name: req.body.name,
      portfolio: req.body.portfolio
    });

    return res.send(newArtist);

  } catch (error) {
    return res.json({
      success: false,
      message: "No ha sido posible crear el artista",
      error: error.message,
    });
  }
}

artistsController.modifyArtist = async (req, res) => {
  let body = req.body;

  try {

      const updateArtist = await Artist.update(
        {
          user_id: req.body.user_id,
          name: req.body.name,
          portfolio: req.body.portfolio
      },
      {
                where: {
          id: body.id
        }
      }
      );


      return res.json({
        success: true,
        message: "El artista ha sido actualizado",
        data: updateArtist,
      });

  } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se ha podido actualizar los datos del artista",
        error: error.message,
      }); 
  }
}

artistsController.deleteArtist = async (req, res) => {


    let body = req.body;

    try {
        const deleteArtist = await Artist.destroy({
          where: {
            id: body.id
          },
        });
        return res.json({
          success: true,
          message: "El artista ha sido eliminado de la base de datos",
          data: deleteArtist,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "El artista no ha podido ser eliminado de la base de datos",
          error: error.message,
        });
      }
    

}

module.exports = artistsController;