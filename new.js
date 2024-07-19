const board = document.getElementById('board');
const cell = document.QuerySelectorAll('cell');
let currentPlay = 'X';
let gameActive = true;

function checkWinner() {
  const winningCombos = [
    /*horizontal*/
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    /*vertical*/
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    /*diagonal*/
    [0, 6, 12, 18, 24], /*left -> right*/
    [4, 8, 12, 16, 20] /*right -> left*/
  ];

  for (let combo of winningCombos) {
    const [a, b, c, d, e] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent && cells[c].textContent ===
      cells[d].textContent && cells[d].textContent === cells[e].textContent &&
      cells[e].textContent) {
      cells[a].style.backgroundColor = 'lightgreen';
      cells[b].style.backgroundColor = 'lightgreen';
      cells[c].style.backgroundColor = 'lightgreen';
      gameActive = false;
      return true;
    }

  }
  if ([...cells].every(cell => cell.textContext !== '')) {
    gameActive = false;
    return true;
  }

  return false;
}
function handleClick() {
  if (!gameActive || this.textContent !== '') {
    this.textContent = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + 'wins!');
      return;
    }
  }

  if (currentPlayer === 'X') {
    currentPlayer = '0';
  } else {
    currentPlayer = 'X';
  }
}

cells.forEach(cell => cell.addEventListener('click', handleclick));