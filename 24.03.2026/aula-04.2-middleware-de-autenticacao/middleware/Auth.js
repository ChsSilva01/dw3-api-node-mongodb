// MIDDLEWARE DE AUTENTICAÇÃO

import jwt from 'jsonwebtoken'
import userController from '../controllers/userController.js'

// Função para verificar a autenticação do usuário
// Verificar se ele possuí um token
const Authorization = (req, res, next) => {
    // Capturar o token do usuário através do cabeçalho  da requisição
    const authToken = req.headers['authorization']
    // Verificando se o token existe
    if (authToken != undefined) {
        const bearerToken = authToken.split(' ')
        const token = bearerToken[1]
        // Veficando se o token é válido
        jwt.verify(token, userController.JWTSecret, (error, data) => {
            // SE O TOKEN FOR INVÁLIDO
            if(error){
                // Cod. 401 : Não autorizado - UNAUTHORIZED
                res.status(401).json({error: "Acesso não autorizado. Token inválido."})
                console.log(error, token, userController.JWTSecret)
            // SE O TOKEN FOR VÁLIDO
            } else {
                req.token = token
                req.loggedUser = {
                    id: data.id,
                    email: data.email
                }
                // PROSSEGUINDO COM A REQUISIÇÃO
                next()
            }
        })
    // SE O TOKEN NÃO EXISTIR
    } else {
        res.status(401).json({error: "Acesso não autorizado, Voce não está autenticado."})
    }
}
export default { Authorization }