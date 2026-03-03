// Importando o service
import gameService from "../services/gameService.js";

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
export default { getAllGames, createGame }