// Adiciona um evento de clique ao elemento com a classe 'hamburger', que, quando clicado, navega para a página anterior no histórico do navegador
document.querySelector('.hamburger').addEventListener('click', () => {
    window.history.back(); // Vai para a página anterior no histórico do navegador
});

// Variável para controlar o índice do slide atualmente visível
let slideIndex = 1;

// Chama a função showSlides passando o valor de slideIndex, inicialmente 1 (primeiro slide)
showSlides(slideIndex);

// Função que é chamada para alterar o índice do slide
function plusSlides(n) {
    // Chama a função showSlides e passa o índice atualizado (slideIndex + n)
    showSlides(slideIndex += n);
}

// Função para exibir o slide atual baseado no valor de 'n'
function showSlides(n) {
    // Seleciona todos os elementos com a classe 'slide' (presumivelmente, esses são os slides)
    const slides = document.getElementsByClassName("slide");
    
    // Se o valor de n for maior que o número total de slides, redefine slideIndex para 1 (o primeiro slide)
    if (n > slides.length) { slideIndex = 1 }
    
    // Se o valor de n for menor que 1, redefine slideIndex para o último slide
    if (n < 1) { slideIndex = slides.length }
    
    // Esconde todos os slides, configurando o estilo 'display' para 'none'
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Exibe o slide atual, configurando o estilo 'display' para 'block'
    slides[slideIndex - 1].style.display = "block";  
}

// Função para exibir automaticamente os slides a cada intervalo
function autoShowSlides() {
    slideIndex++; // Incrementa o índice do slide
    showSlides(slideIndex); // Exibe o slide atualizado
}

// Configura um intervalo de tempo para mudar o slide automaticamente a cada 4000 milissegundos (4 segundos)
setInterval(autoShowSlides, 4000);
