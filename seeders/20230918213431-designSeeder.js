'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Designs", [
      {
        id: 1,
        artist_id: 1,
        style: "Japanese",
        picture: "https://i.ibb.co/pLVc2CM/japones1.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 2,
        artist_id: 1,
        style: "Japanese",
        picture: "https://i.ibb.co/kKMbqDC/japones2.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 3,
        artist_id: 1,
        style: "Japanese",
        picture: "https://i.ibb.co/mhS3XBh/japones3.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 4,
        artist_id: 1,
        style: "Japanese",
        picture: "https://i.ibb.co/MR7cgYW/japones4.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 5,
        artist_id: 1,
        style: "Japanese",
        picture: "https://i.ibb.co/4tGBjnk/japones5.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 6,
        artist_id: 2,
        style: "Japanese",
        picture: "https://i.ibb.co/s9wmx3r/japones6.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 7,
        artist_id: 2,
        style: "Japanese",
        picture: "https://i.ibb.co/yfb1vTN/japones7.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 8,
        artist_id: 2,
        style: "Japanese",
        picture: "https://i.ibb.co/vVkGfGg/japones8.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 9,
        artist_id: 2,
        style: "Japanese",
        picture: "https://i.ibb.co/r7VmZWr/japones9.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 10,
        artist_id: 2,
        style: "Japanese",
        picture: "https://i.ibb.co/tDBwTDy/japones10.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 11,
        artist_id: 1,
        style: "NewSchool",
        picture: "https://i.ibb.co/kqjr7rX/newschool1.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 12,
        artist_id: 1,
        style: "NewSchool",
        picture: "https://i.ibb.co/Z8q43wJ/newschool2.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 13,
        artist_id: 1,
        style: "NewSchool",
        picture: "https://i.ibb.co/PD08sPw/newschool3.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 14,
        artist_id: 1,
        style: "NewSchool",
        picture: "https://i.ibb.co/gmrTLnK/newschool4.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 15,
        artist_id: 1,
        style: "NewSchool",
        picture: "https://i.ibb.co/h9y595X/newschool5.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 16,
        artist_id: 2,
        style: "NewSchool",
        picture: "https://i.ibb.co/4j26TFM/newschool6.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 17,
        artist_id: 2,
        style: "NewSchool",
        picture: "https://i.ibb.co/nm2gV8g/newschool7.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 18,
        artist_id: 2,
        style: "NewSchool",
        picture: "https://i.ibb.co/v30jBLL/newschool8.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 19,
        artist_id: 2,
        style: "NewSchool",
        picture: "https://i.ibb.co/ZSXxq7H/newschool9.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 20,
        artist_id: 2,
        style: "NewSchool",
        picture: "https://i.ibb.co/nzb34Mz/newschool10.jpg",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },

    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
