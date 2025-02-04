let music = new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3");
let gameover= false;


let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
