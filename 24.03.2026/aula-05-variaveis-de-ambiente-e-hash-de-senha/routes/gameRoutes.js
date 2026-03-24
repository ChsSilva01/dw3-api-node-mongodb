import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()
// Importando o Middleware de autentição
import Auth from '../middleware/Auth.js'

// Na camada de routes é armazenado os ENDPOINTS (URL's) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", Auth.Authorization, gameController.getAllGames);

// Endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGame);

// Endpoint para excluir um game
gameRoutes.delete("/games/:id", Auth.Authorization, gameController.deleteGame)

// Endpoint para alterar um game
gameRoutes.put("/games/:id", Auth.Authorization, gameController.updateGame)

// Endpoint para listar um jogo único
gameRoutes.get("/games/:id", Auth.Authorization, gameController.getOneGame)


export default gameRoutes;