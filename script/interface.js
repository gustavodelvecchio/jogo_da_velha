document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let btn_reset = document.querySelector('#btn_reset');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    btn_reset.addEventListener('click', resetGame);

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){

        setTimeout(() => {
            let winner = document.querySelector("#winner");
            winner.style.visibility = "visible";  

            if (playerTime == 0){
                winner.innerHTML = "O jogo acabou, o vencedor é 🛡️";
            } else {
                winner.innerHTML = "O jogo acabou, o vencedor é ⚔️";
            }
    
        }, 10);
    }

    updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetGame(){

    // reinicia variáveis de controle
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0; // vez do jogador 0 = escudo(o) e 1 = espadas(x)
    gameOver = false;
    winner.style.visibility = "hidden"; 

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        square.innerHTML = '';

    })
}