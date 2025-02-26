const mario = document.querySelector('.mario');

// Função para fazer o personagem Mario pular
const pulo = (event) => {
    if (event.code === 'Space' || event.code === 'SpaceBar') { // Verifica se a tecla pressionada é a barra de espaço
        mario.classList.add('pulo'); // Adiciona a classe 'pulo' para ativar a animação de pulo

        setTimeout(() => {
            mario.classList.remove('pulo'); // Remove a classe 'pulo' após um curto intervalo de tempo para encerrar a animação
        }, 500);
    }
}

document.addEventListener('keydown', pulo); // Adiciona um EventListener para detectar pressionamentos de tecla e chamar a função pulo
