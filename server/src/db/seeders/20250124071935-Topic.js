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
        {
          name: "History",
          img: "https://www.euroschoolindia.com/wp-content/webp-express/webp-images/uploads/2023/07/how-to-learn-history.jpg.webp",
        },
        {
          name: "Literature",
          img: "https://www.tutoronline.ru/upload/blog/content/09.07.2024/a1a71c886fa446949ee685e17998fc7a.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};
