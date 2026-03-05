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
    // Método para cadastrar um Game
    async Create(title, platform, year, price){
        try{
            const newGame = new Game({
                // Desestruturação (title : title)
                title,
                platform,
                year,
                price
            })
            // Gravando no banco
            await newGame.save() // .save() método do Mongoose para cadastrar no BD.
        }catch(error){
            console.log(error) 
        }
    }

    // MÉTODO PARA EXCLUIR UM JOGO
    async Delete(id){
        try{
            // Excluindo o jogo pela ID
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)

        } catch (error) {
            console.log(error)    
        }
    }

    // MÉTODO PARA ALTERAR UM JOGO
    async Update(id, title, platform, year, price){
        try{
            await Game.findByIdAndUpdate(id, {
                title,
                platform,
                year,
                price
            })
            console.log(`O jogo com a ID ${id} foi alterado.`)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new gameService();