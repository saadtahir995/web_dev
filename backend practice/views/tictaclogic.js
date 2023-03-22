window.addEventListener('DOMContentLoaded', () => {
    const Tiles = Array.from(document.querySelectorAll('.tile'));
    var currentplayer = 'X'
    var isActive = true;
    const displaymsg = document.querySelector('.game_msg');
    const displayTurn = document.querySelector('.players_turn');
    const resetbtn = document.querySelector('#btn');
    var board = ["", "", "", "", "", "", "", "", ""];
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


    const change_player = () => {
        if (isActive) {
            currentplayer = currentplayer === 'X' ? 'O' : 'X';
            displayTurn.innerHTML = currentplayer;
        }
    }
    const IsValid = (tile) => {
        if (tile.innerHTML === "X" || tile.innerHTML === "O") {
            return false;

        }
        return true;

    }
    const board_entry = (Index) => {
        board[Index] = currentplayer;
    }
    function win_check() {
        for (let i = 0; i <= 7; i++) {
            var index = winConditions[i];
            var x = board[index[0]];
            var y = board[index[1]];
            var z = board[index[2]];
            if (x == "" || y == "" || z == "") {
                continue;
            }
            else if (x == y && y == z) {
                displaymsg.innerHTML = "player " + currentplayer + " has won the Match";
                isActive = false
                break;
            }
            else if (!board.includes("")) {
                displaymsg.innerHTML = "Its A Tie";
                isActive = false;
                break;
            }
            else {
                continue;
            }

        }
        
    }
    const move_maker = (tile, index) => {
        if ((IsValid(tile)) && (isActive)) {
            tile.innerHTML = currentplayer;
            board_entry(index);
            win_check();
            change_player();
            
        }
    }
    const reset_board=()=>{
        board = ["", "", "", "", "", "", "", "", ""];
        isActive=true;
        Tiles.forEach(Element=>{
            Element.innerHTML="";
        });
        currentplayer="X";
        displayTurn.innerHTML=currentplayer;
        displaymsg.innerHTML="";
    }

    Tiles.forEach(Element => {
        Element.addEventListener('click', () => move_maker(Element, Tiles.indexOf(Element)));
    })
    resetbtn.addEventListener('click',reset_board);
});