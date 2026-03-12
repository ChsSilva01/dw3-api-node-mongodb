import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
    genre: String, // Gênero
    platform: String, // Plataforma
    rating: String, // Classificação de idade

})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema
    // description: [descriptionSchema] - Definindo o campo como array
});

const Game = mongoose.model('Game', gameSchema)

export default Game;