// Importando o módulo 'express' para criar o servidor web
import express from 'express'
// Importando o módulo 'cors' para habilitar o compartilhamento de recursos entre diferentes origens (cross-origin resource sharing)
import cors from 'cors'
// Importando a configuração do banco de dados (modificado para utilizar banco de dados)
import sql from './database.js'

// Criando uma instância do express para configurar as rotas e middleware
const app = express();

// Configurando o Express para parsear o corpo das requisições como JSON
app.use(express.json());

// Habilitando o CORS para permitir que a API seja acessada de diferentes origens (domínios)
app.use(cors());

// Definindo uma rota GET para login de usuário
// Recebe 'usuario' e 'senha' como parâmetros na URL
app.get('/login/:usuario/:senha', async (req, res) => {
    // Extraindo os parâmetros da URL (usuario e senha)
    const { usuario, senha } = req.params

    // Realizando uma consulta no banco de dados (modificado para SQL) para verificar o usuário e senha fornecidos
    const consulta = await sql`select * from novo_usuario where
    email = ${usuario} and senha = ${senha}`

    // Se a consulta retornar algum resultado (usuário e senha válidos), retorna o usuário encontrado
    if (consulta != null && consulta != '') {
        return res.status(200).json(consulta) // Status 200 (OK) e retorna os dados do usuário
    }
    else {
        // Se a consulta não encontrar o usuário ou a senha não for correta, retorna erro de autenticação
        return res.status(401).json('usuario ou senha incorreto') // Status 401 (não autorizado) e mensagem de erro
    }
})

app.post('/cadArv/novo', async (req, res) => {
    try {
        const { nomeCientifico, nomePopular, localizacao, altura, tipoFolha, tipoFruto } = req.body;
        const insert = await sql`INSERT INTO cadastro(nome_cientifico, nome_popular, altura, tipo_de_folha, tipo_de_fruto, localiza_geografica)	
        VALUES (${nomeCientifico}, ${nomePopular}, ${altura}, ${tipoFolha}, ${tipoFruto},${localizacao})`
        return res.status(200).json('ok')
    } catch (error) {
        console.log(error)
        return res.status(500).json('Erro ao cadastrar')
    }
})


app.post('/cadUser/novo', async (req, res) => {
    try {
        const { usuario, email, senha } = req.body;
        const insert = await sql`INSERT INTO novo_usuario(nome, email, senha)	
        VALUES (${usuario}, ${email}, ${senha})`
        return res.status(200).json('ok')
    } catch (error) {
        console.log(error)
        return res.status(500).json('Erro ao cadastrar')
    }
})

// Iniciando o servidor na porta 3000 e exibindo uma mensagem no console para indicar que está rodando
app.listen(3000, () => {
    console.log('API no ar') // Exibe "Rodando" no console quando o servidor é iniciado
});
