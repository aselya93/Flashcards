const { Movie, User } = require("../db/models");

class CardService {
  static async getAll() {
    return await Movie.findAll({
      include: [{ model: User }],
    });
  }

  static async create(data) {
    const newMovie = await Movie.create(data);
    return await this.getById(newMovie.id);
  }

  static async getById(id) {
    return await Movie.findOne({
      where: { id },
      include: [{ model: User }],
    });
  }

  static async delete(id) {
    const Movie = await this.getById(id);
    if (Movie) {
      await Movie.destroy();
    }
    return Movie;
  }

  static async update(id, data) {
    const Movie = await this.getById(id);
    if (Movie) {
      Movie.title = data.title;
      Movie.description = data.description;
      Movie.year = data.year;
      Movie.image = data.image;
      Movie.rating = data.rating;
      await Movie.save();
    }
    return Movie;
  }
}

module.exports = CardService;
