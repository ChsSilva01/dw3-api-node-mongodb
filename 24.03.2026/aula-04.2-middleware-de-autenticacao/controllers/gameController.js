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
        const { title, year, price, descriptions } = req.body // Coletando os dados do corpo da requisição
        // Passando os dados para o Service
        await gameService.Create(title, year, price, descriptions)
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
            const { title, year, price, descriptions } = req.body
            const game = await gameService.Update(id, title, year, price, descriptions)
            res.status(200).json({ message: 'Jogo atualizado com sucesso!', game : game })
        } else {
            res.status(400).json({ message: 'Ocorreu um erro na validação da ID.' })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

// FUNÇÃO PARA BUSCAR UM JOGO ÚNICO
const getOneGame = async (req, res) => {
    try{
        const id = req.params.id
        if(ObjectId.isValid(id)){
            const game = await gameService.getOne(id)
            // Verificando se o jogo foi encontrado
            if (!game){ // Se o jogo não existir (! = NOT)
                res.status(404).json({ error: 'O jogo buscado não foi encontrado.' })
            } else { // Jogo encontrado
                res.status(200).json({ game })
            }
        // SE A ID FOR INVÁLIDA
        } else {
            res.status(400).json({ error: 'A ID informada é inválida.' })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame }