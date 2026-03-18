// Importando o service
import userService from "../services/userService.js";

// Função para CADASTRAR um usuário
const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        await userService.Create(name, email, password);
        res.status(201).json({message: 'Usuário cadastrado com sucesso! '})
        // Cod. 201 (CREATED)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Não foi possível cadastrar o usuário. Erro interno do servidor.'});
    }
}
export default { createUser }