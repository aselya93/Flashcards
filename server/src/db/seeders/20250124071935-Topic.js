"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          name: "Lord of the rings",
          img: "https://cdn.ananasposter.ru/image/cache/catalog/poster/film/90/3667-1000x830.jpg",
        },
        {
          name: "Hobbit",
          img: "https://upload.wikimedia.org/wikipedia/ru/3/32/The_Hobbit._An_Unexpected_Journey.jpg",
        },
        {
          name: "Geography",
          img: "https://uchilkin.ru/storage/blog_articles/March2024/uchilkin-knigi-geografiaya1.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
