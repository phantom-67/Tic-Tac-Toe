let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameActive = true;

let restart = document.querySelector("#reset");
let start = document.querySelector("#start");
let cells = document.querySelectorAll(".cell");

restart.addEventListener('click', ()=>{
    board = ["","","","","","","","",""];
    console.log("reset clicked");
    cells.forEach((cell) =>{
        cell.innerText="";
    });
    gameActive=true;
})

start.addEventListener('click', ()=>{
    board = ["","","","","","","","",""];
    console.log("game started");
    cells.forEach((cell) =>{
        cell.innerText="";
    });
    gameActive=true;
    alert("Welcome to  game !")
})
  
const checkWin = () =>{
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for(comb of winningCombinations){
        let [a,b,c] = comb;
        if((board[a] === board[b] && board[b] === board[c]) &&(board[a]!="" && board[b]!="" && board[c]!="")){
            gameActive=false;
            alert(`${board[a]} player wins the game`);
        }
    }
}

const checkDraw = () =>{

    if (board.every(cell => cell !== "") && gameActive) {
        gameActive = false;
        alert("It's a draw!");
    }
}

cells.forEach((cell, idx) => {
    cell.addEventListener("click", ()=>{
        if(gameActive==true && board[idx]==""){
            cell.innerText=currentPlayer;
            board[idx]=currentPlayer;
            if(currentPlayer=="X") currentPlayer="O";
            else currentPlayer="X";
            console.log(`${currentPlayer} turn`);
            setTimeout(()=>{
                checkWin();
            },100)
            setTimeout(() =>{
                checkDraw();
            }, 100);
        }
        else if(gameActive==true && board[idx]!=""){
            alert("Choose another cell");
        }
        else{
            return;
        }
    })
});

