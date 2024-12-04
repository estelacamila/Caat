
    // Seleciona o botão que irá abrir o modal de login
const Button = document.querySelector('button');
// Seleciona o modal principal (de login) e o botão de fechar dentro dele
const modal = document.querySelector('dialog.principal');
const closeModal = document.querySelector('dialog.principal span');
// Seleciona o modal de cadastro e o botão de fechar dentro dele
const modalLogin = document.querySelector('dialog.opa');
const closeModalLogin = document.querySelector('#xiss');
// Seleciona o link que abre o modal de cadastro
const cadastrarLink = document.querySelector('#cadastrar');

// Seleciona o botão de login (para autenticação)
let botao = document.querySelector('#botao');

// Evento para exibir o modal de login quando o botão é clicado
Button.onclick = function () {
    modalLogin.showModal();
};

// Evento para fechar o modal de login quando o ícone de fechar é clicado
closeModal.onclick = function () {
    modal.close();
};

// Evento para fechar o modal de cadastro quando o ícone de fechar é clicado
closeModalLogin.onclick = function () {
    modalLogin.close();
};

// Evento para abrir o modal de login e fechar o modal de cadastro
cadastrarLink.onclick = function (event) {
    modalLogin.close();  // Fecha o modal de cadastro
    modal.showModal();   // Abre o modal de login
};

// Função para alternar o estado do menu (abrir ou fechar)
function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('open');  // Adiciona ou remove a classe 'open' para abrir/fechar o menu
}

// Função para fechar o menu, removendo a classe 'open'
function closeMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.remove('open');  // Remove a classe 'open', fechando o menu
}

// Evento para autenticação de login quando o botão de login é clicado
botao.addEventListener('click', async () => {
    // Obtém os valores dos campos de usuário e senha
    let usuario = document.querySelector('#usuario1').value;
    let senha = document.querySelector('#senha1').value;

    // Verifica se os campos não estão vazios
    if (usuario != "" && senha != "") {
        // Envia uma solicitação ao servidor para verificar o login
        let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`);
        if (resposta.status == 200) {
            // Se o login for bem-sucedido, redireciona para a página de cadastro
            window.location.replace('../html/cadastro.html')
            alert('Bem vindo!');
        } else {
            // Se o login falhar, exibe uma mensagem de erro
            alert('Usuario ou senha incorreta!');
        }
    } else {
        // Se os campos de usuário ou senha estiverem vazios, exibe um alerta
        alert('Preencha todos os campos');
    }
});

// Evento para o cadastro de um novo usuário ao clicar no botão de cadastro
document.querySelector('#entrarcad').addEventListener('click', async (event) => {
    event.preventDefault();  // Previne o comportamento padrão do formulário
    window.location.href = "index.html"  // Redireciona para a página inicial
    const usuario = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Verifica se algum dos campos obrigatórios está vazio
    if (!usuario || !email || !senha) {
        // Exibe um alerta se algum campo obrigatório não for preenchido
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;  // Interrompe a execução da função, não prosseguindo com o cadastro
    }

    // Envia os dados do novo usuário para o servidor
    const respost = await fetch(`http://localhost:3000/cadUser/novo`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            email: email,
            senha: senha
        })
    });
});
