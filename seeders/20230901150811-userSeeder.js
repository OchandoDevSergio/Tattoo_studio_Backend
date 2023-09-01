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
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        role_id: 2,
        name: "Alberto",
        surnames: "Castillo Blasco",
        dni: "11111111A",
        email: "alcast@mail.com",
        phone: 611111111,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 2,
        role_id: 2,
        name: "Cesar",
        surnames: "Mayoral Silvestre",
        dni: "22222222B",
        email: "cesmay@mail.com",
        phone: 622222222,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 3,
        role_id: 2,
        name: "Jose",
        surnames: "Escamilla Valles",
        dni: "33333333C",
        email: "josesc@mail.com",
        phone: 633333333,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 4,
        role_id: 2,
        name: "Miguel",
        surnames: "Revert Vaquero",
        dni: "44444444D",
        email: "migrev@mail.com",
        phone: 644444444,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 5,
        role_id: 1,
        name: "Sergio",
        surnames: "Martí Silvestre",
        dni: "55555555E",
        email: "sergmar@mail.com",
        phone: 655555555,
        password: "$2b$08$6gegCSFogFu8kL8WhbN1N.MiRsC6bU3i.HAtvQvwQWbrAyu84vUEC",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 6,
        role_id: 3,
        name: "Carlos",
        surnames: "Blanco García",
        dni: "66666666F",
        email: "cablagra@mail.com",
        phone: 666666666,
        password: "",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 7,
        role_id: 3,
        name: "Cesar",
        surnames: "Moreno Gil",
        dni: "77777777G",
        email: "cemogi@mail.com",
        phone: 777777777,
        password: "",
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
