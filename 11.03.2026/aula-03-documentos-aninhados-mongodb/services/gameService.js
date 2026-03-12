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
    async Create(title, year, price, descriptions){
        try{
            const newGame = new Game({
                // Desestruturação (title : title)
                title,
                year,
                price,
                descriptions
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
    async Update(id, title, year, price, descriptions){
        try{
            const updateGame = await Game.findByIdAndUpdate(id, {
                title,
                year,
                price,
                descriptions
            },
            { new: true }
        )
        console.log(`O jogo com a ID ${id} foi alterado.`)
        return updateGame

        } catch (error) {
            console.log(error)
        }
    }

    // MÉTODO PARA LISTAR UM JOGO ÚNICO
    async getOne(id){
        try{
            const game = await Game.findOne({_id: id})
            return game
        } catch(error){
            console.log(error)
        }
    }
}

export default new gameService();