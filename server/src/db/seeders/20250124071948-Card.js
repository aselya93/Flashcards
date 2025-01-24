"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question:
            "Кто сказал фразу: «Маг никогда не опаздывает, Фродо Беггинс, и никогда не приходит раньше; он всегда появляется тогда, когда положено»?",
          correctAnswer: "Гэндальф Серый",
          option1: "Гэндальф Белый",
          option2: "Гэндальф Серый",
          option3: "Саруман",
          option4: "Элронд",
          img: "https://cdni-vm.servicecdn.ru/2021.10/original/720_616d32dc82682c4d66f58f6e.jpg",
          topicId: 1,
        },
        {
          question: "Сколько Великих колец было дано расе людей?",
          correctAnswer: "9",
          option1: "3",
          option2: "7",
          option3: "9",
          option4: "1",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKS33vuCuN7nIgvn6FjkiAFGxCIVLrD_26g&s",
          topicId: 1,
        },
        {
          question: "Кого Арагорн призывает к камню Эреха?",
          correctAnswer: "Армию Мертвых",
          option1: "Хоббитов",
          option2: "Армию Мертвых",
          option3: "Армию Эльфов",
          option4: "Армию Орков",
          img: "https://cdnn21.img.ria.ru/images/15143/39/151433909_0:0:478:203_768x0_80_0_0_9b75c5d033b7591391650029508a5616.jpg",
          topicId: 1,
        },
        {
          question: "Кто в Амон Хен пытался отобрать кольцо у Фродо?",
          correctAnswer: "Боромир",
          option1: "Арагорн",
          option2: "Саурон",
          option3: "Смеагол",
          option4: "Боромир",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65deeeea1759d95956e86446_65df05b6f9acc8146d1ec74d/scale_1200",
          topicId: 1,
        },
        {
          question: "Как нужно было уничтожить Кольцо Власти?",
          correctAnswer: "Бросить в вулкан",
          option1: "Бросить в вулкан",
          option2: "Выбросить в океан",
          option3: "Сжешь",
          option4: "Разрубить мечом",
          img: "https://img5tv.cdnvideo.ru/webp/shared/files/202104/1_1299126.jpg",
          topicId: 1,
        },
        {
          question: "Как называли камень, который охранял дракон в Хоббите?",
          correctAnswer: "Аркенстоун",
          option1: "Аметист",
          option2: "Алмаз",
          option3: "Аркенстоун",
          option4: "Агат",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_653a10e17bed36510b0c5424_6564baa24ec66352011feabd/scale_1200",
          topicId: 2,
        },
        {
          question: "Как звали дракона из Хоббита?",
          correctAnswer: "Смауг",
          option1: "Исильдур",
          option2: "Галадриэль",
          option3: "Берримор",
          option4: "Смауг",
          img: "https://hagee.ru/uploads/posts/2024-05/43a7d0afb5_1111.webp",
          topicId: 2,
        },
        {
          question: "Как зовут главного героя фильма Хоббит?",
          correctAnswer: "Бильбо Бэггинс",
          option1: "Фродо Бэггинс",
          option2: "Бильбо Бэггинс",
          option3: "Перегрин Тук",
          option4: "Мериадок Брендибак",
          img: "https://fotoblik.ru/wp-content/uploads/2023/09/bilbo-beggins-12.webp",
          topicId: 2,
        },
        {
          question:
            "Как зовут эльфийского персонажа со светлыми волосами и голубыми глазами, который был метким лучником с утонченной внешностью?",
          correctAnswer: "Леголас",
          option1: "Филли",
          option2: "Килли",
          option3: "Леголас",
          option4: "Клоин",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/1918821/pub_601553a67fd0a5390ff9a573_60155876d3c91450c6797d28/scale_1200",
          topicId: 2,
        },
        {
          question: "Как зовут существо, которое любило кольцо больше жизни?",
          correctAnswer: "Голлум",
          option1: "Голлум",
          option2: "Пиппин",
          option3: "Мэри",
          option4: "Гимли",
          img: "https://static.wikia.nocookie.net/villains/images/a/a3/GollumAUJTextlessPoster.jpeg/revision/latest?cb=20151020122542",
          topicId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
