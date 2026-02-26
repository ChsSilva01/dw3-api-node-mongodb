// Importando o Model
import Game from "../models/Games.js";

class gameService {
    // Método (serviço) para buscar todos os registros no banco
    // Funções asíncronas são bloqueantes
    async getAll(){
        // Try trata o sucesso
        try{
            // .find() -> é o método do mongoose para buscar registros no banco
            const games = await Game.find();
            return games;
        }
        // Catch trata a falha
        catch(error){
            console.log(error)
        }
    }
}

export default new gameService();