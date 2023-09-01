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
    await queryInterface.bulkInsert("Appointments", [
      {
        id: 1,
        user_id: 1,
        artist_id: 1,
        date: "2023-06-10",
        hour: "09:00 to 12:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 2,
        user_id: 1,
        artist_id: 1,
        date: "2023-10-10",
        hour: "12:00 to 15:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 3,
        user_id: 2,
        artist_id: 1,
        date: "2023-09-12",
        hour: "09:00 to 12:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 4,
        user_id: 3,
        artist_id: 1,
        date: "2023-09-20",
        hour: "12:00 to 15:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 5,
        user_id: 3,
        artist_id: 1,
        date: "2023-09-27",
        hour: "12:00 to 15:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 6,
        user_id: 2,
        artist_id: 2,
        date: "2023-07-07",
        hour: "09:00 to 12:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 7,
        user_id: 2,
        artist_id: 2,
        date: "2023-07-14",
        hour: "09:00 to 12:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 8,
        user_id: 4,
        artist_id: 2,
        date: "2023-08-10",
        hour: "09:00 to 12:00",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 9,
        user_id: 4,
        artist_id: 2,
        date: "2024-09-10",
        hour: "09:00 to 12:00",
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
