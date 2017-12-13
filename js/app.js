var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

// var h1 = document.getElementsByTagName("h1")
// var h1Alt = document.querySelector("h1")

//query selector for gameboard.
// document.appendChild(gameBoard)

function createGame() {
    for (var i = 0; i < board.length; i++) {
        var newSquare = document.createElement("div")
        newSquare.id = i
        if (i === 0 || i === 1 || i === 3 || i === 4) {
            newSquare.setAttribute("class", "square b-border r-border")
        }
        else if (i === 2 || i === 5) {
            newSquare.setAttribute("class", "square b-border")
        }
        else if (i < 8) {
            newSquare.setAttribute("class", "square, r-border")
        }
        else{
            newSquare.setAttribute("class", "square")
        }
        document.getElementById("gameboard").appendChild(newSquare)
        addClickListener(newSquare)
    }
}

function displayMessage(message) {
    var messageElement = document.querySelector(".message")
    if (message) {
        messageElement.innerHTML = message
    }
    else{
        messageElement.innerHTML = "Current Player" + currentPlayer
    }
}

function changeMessage() {
    var messageElement = document.querySelector(".message")
    messageElement += ".end-message"
    return messageElement
}

function makeMove(square, index) {
    board[index] = currentPlayer
    square.innerHTML = currentPlayer
}

createGame()
