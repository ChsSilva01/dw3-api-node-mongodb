// Importando o service
import userService from "../services/userService.js";
// Importando o JWT (criação de token)
import jwt from 'jsonwebtoken'
// Segredo para gerar o token da API
const JWTSecret = 'thegames-secret'



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

// Função para AUTENTICAR um usuário (Função de login)
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body
        // Se o e-mail existe
        if (email != undefined){
            const user = await userService.getOne(email)
            // Se o usuário for encontrado
            if (user != undefined){
                // Verifica se a senha está correta
                if(user.password == password){
                    // CRIAR O TOKEN
                    jwt.sign({id: user._id,email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) =>{
                        // FALHA
                        if(error) {
                            res.status(400).json({ error: "Não foi possível gerar o token." })
                        // SUCESSO
                        } else {
                            res.status(200).json({message: 'Login realizado com sucesso', token: token })
                        }
                    })
                // Senha incorreta
                } else {
                    res.status(401).json({ error: "Suas credibilidades são inválidas. Acesso negado. Tente novamente."})
                    // Cod. 401 (UNAUTHORIZED) - Não autorizado
                }
            // Usuário não encontrado
            } else {
                res.status(404).json({ error : "O usuário informado não foi encontrado."})
            }
        } else {
            res.status(404).json({ error: "E-mail inválido ou não informado" })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Não foi possível realizar login. Error interno do servidor'})
    }
}
export default { createUser, loginUser, JWTSecret }