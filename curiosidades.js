

// Seleciona o elemento do carrossel pelo seletor CSS
const carrosel = document.querySelector('.carrosel-container');

// Inicializa o índice do slide atual e o número total de slides
let count = 0;
let nSlides = carrosel.children.length; // Conta o número de slides dinamicamente

// Função para avançar para o próximo slide
function slideForward() {
    if (count < nSlides - 1) {
        carrosel.children[count].classList.add('none');
        carrosel.children[count + 1].classList.remove('none');
        count++;
    }
}

// Função para voltar ao slide anterior
function slideBackward() {
    if (count > 0) {
        carrosel.children[count].classList.add('none');
        carrosel.children[count - 1].classList.remove('none');
        count--;
    }
}

// Adiciona event listeners aos botões de navegação
document.querySelector('.btn-next').addEventListener('click', slideForward);
document.querySelector('.btn-prev').addEventListener('click', slideBackward);
