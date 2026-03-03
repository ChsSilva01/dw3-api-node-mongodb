import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()

// Na camada de routes é armazenado os ENDPOINTS (URL's) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGame);

export default gameRoutes;