let music = new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3");
let gameover= false;


let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}


const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && boxTexts[e[2]].innerText === boxTexts[e[1]].innerText ) && boxTexts[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px"
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".boxText")
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!gameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})