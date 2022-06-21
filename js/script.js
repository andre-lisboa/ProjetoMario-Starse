const mario = document.querySelector(".super-mario")
const pipe = document.querySelector(".pipe-game")

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500)
}

const loopGame = setInterval(() =>{
    /*Código para criação dos elementos pipe e mario*/
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
    /*Esses códogos são funções reservadas para pegar o valor da clisão que é 0 e substiuir*/
        .getComputedStyle(mario)
        .bottom.replace("px", "");
    /*Código para iniciar colisão do mario com pipe OBS: 120 é o pipePosition já o cano tem 40px de largura então sbtraindo (120 - 80 = 40 e 40px - 40 = 0 dar o efeito de colisão)*/
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./image/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    /*O que acontece na colisão é limpo pelo clearInterval(loopGame)*/
    clearInterval(loopGame)
    }
}, 10);

document.addEventListener("keydown", jump);
