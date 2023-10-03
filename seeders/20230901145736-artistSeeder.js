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
    await queryInterface.bulkInsert("Artists", [
      {
        id: 1,
        user_id: 6,
        name: "Carlos",
        portfolio: "",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 2,
        user_id: 7,
        name: "Cesar",
        portfolio: "",
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
