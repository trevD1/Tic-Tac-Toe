

window.onload = () => {
  //create two players
  const PLAYER_ORANGE = "orange";
  const PLAYER_BLUE = "blue";
  const restartButton = document.querySelector(".restart-btn");
  restartButton.onclick = () => location.reload();

  const moves = {
    blue: [],
    orange: [],
  };
  const winningCombo = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  let gameOver = false;
  let currentPlayer = PLAYER_ORANGE;
  const currentPlayerShow = document.getElementById("currentPlayer");

  // select all the squares in the grid
  const squares = document.querySelectorAll(".grid div");
//this function changes the player when the turn is over
const changePlayer = () => {
    if (currentPlayer === PLAYER_ORANGE) {
      currentPlayer = PLAYER_BLUE;
    } else {
      currentPlayer = PLAYER_ORANGE;
    }
    currentPlayerShow.innerHTML = currentPlayer + " is playing now";
  };

  //check if current player hit the right combo
  const isAWinner = () => {
    return winningCombo.some((combo) =>
      combo.every((number) => moves[currentPlayer].indexOf(number) !== -1)
    );
  };

  const isGameOver = () => {
    console.log(moves.blue.length + moves.blue.length);
    return moves.blue.length + moves.blue.length >= 9;
  };
//what happens when I click on each box
  const handlePlay = (e) => {
    e.target.style.backgroundColor = currentPlayer;
    moves[currentPlayer].push(Number(e.target.id));
    let playerWin = isAWinner();
    if (playerWin == true) {
      document.getElementById("winner").innerHTML =
        currentPlayer.toUpperCase() + " win";
      squares.forEach((square) => square.remove());
      restartButton.disabled = false;
    }
    //check if there are no more moves
    gameOver = isGameOver();
    if (gameOver) {
      squares.forEach((square) => square.remove());
      restartButton.disabled = false;
    }

    changePlayer();
  };

  //add a function that when I click on one of the boxes, will give a color to this  box based on the player
  squares.forEach((square) =>
    square.addEventListener("click", handlePlay, { once: true })
  );

};
