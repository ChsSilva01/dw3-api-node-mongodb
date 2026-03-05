// Importando o service
import gameService from "../services/gameService.js";
// Importando o ObjectId
import { ObjectId } from "mongodb";

// Função para tratar a requisição de LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll();
        res.status(200).json({ games : games })
        // Cod. 200 (OK) : Requisição feita com sucesso
    } catch(error){
        console.log(error);
        res.status(500).json({ error : 'Erro interno do servidor.' })
    }
}

// Função para trar a requisição de CADASTRAR um jogo
const createGame = async(req,res) =>{
    try{
        // DESESTRUTURAÇÃO
        // const title
        // const platform
        const { title, platform, year, price } = req.body // Coletando os dados do corpo da requisição
        // Passando os dados para o Service
        await gameService.Create(title, platform, year, price)
        res.status(201).json({ message: 'O jogo foi cadastrado com sucesso!' })
        // Cod. 201 - CRATED - Um novo recurso foi criado no servidor.
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor. Não foi possível cadastrar o jogo.'})
    }
}
// FUNÇÃO PARA DELETAR UM JOGO
const deleteGame = async (req, res) => {
    try {
        // VALIDAÇÃO DO ID
        const id = req.params.id
        // VALIDAÇÃO DO ID
        if (ObjectId.isValid(id)){
            await gameService.Delete(id)
            res.status(204).json({ message: "O jogo foi excluído com sucesso!" })
            // Cod. 204 (NO CONTENT)
        } else {
            res.status(400).json({ message: 'Ocorreu um erro na validação da ID.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

// FUNÇÃO PARA UM ALTERAR O JOGO
const updateGame = async (req, res) => {
    try{
        const id = req.params.id
        if(ObjectId.isValid(id)){
            const { title, platform, year, price } = req.body
            await gameService.Update(id, title, platform, year, price)
            res.status(200).json({ message: 'Jogo atualizado com sucesso!' })
        } else {
            res.status(400).json({ message: 'Ocorreu um erro na validação da ID.' })
        }
    } catch(error){
        console.log(error)
        // res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

export default { getAllGames, createGame, deleteGame, updateGame }