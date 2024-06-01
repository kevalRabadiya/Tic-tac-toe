let audioturn = new Audio('/sound1.mp3');
let gameoversound = new Audio("/sound2.mp3");
let turn = "X";
let gameover = false;
const win = document.getElementById('win');
let reset = document.getElementById('reset');
//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for a win

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText)
            && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)
            && (boxtext[e[0]].innerText !== '')) {
            gameoversound.play()
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover = true;
            win.style.opacity = 0.6;
        }

    })
}

//  Game main logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    //particular boxtxt on set value
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn
            }
        }
    })
})

//reset button

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    win.style.opacity = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn
})
