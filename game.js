document.getElementById('start-game').addEventListener('click', function() {
    const playerChoice = document.getElementById('player-choice').value;
    const gameBoard = document.querySelector('.grid');
    gameBoard.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
    }

    document.getElementById('game-board').style.display = 'block';
    document.getElementById('game-options').style.display = 'none';

    let currentPlayer = playerChoice === 'X' ? 'X' : 'O';
    let boardState = Array(9).fill(null);

    function handleCellClick(event) {
        const index = [...gameBoard.children].indexOf(event.target);
        if (boardState[index] || checkWinner()) return;

        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWinner()) {
            alert(`${currentPlayer} выиграли!`);
            updateStats(currentPlayer);
            resetGame();
            return;
        }

        if (boardState.every(cell => cell)) {
            alert('Ничья!');
            updateStats('D');
            resetGame();
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer !== playerChoice) {
            makeComputerMove();
        }
    }

    function makeComputerMove() {
        let availableCells = [];
        boardState.forEach((cell, index) => {
            if (!cell) availableCells.push(index);
        });

        const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
        boardState[randomIndex] = currentPlayer;
        gameBoard.children[randomIndex].textContent = currentPlayer;

        if (checkWinner()) {
            alert(`${currentPlayer} выиграли!`);
            updateStats(currentPlayer);
            resetGame();
            return;
        }

        if (boardState.every(cell => cell)) {
            alert('Ничья!');
            updateStats('D');
            resetGame();
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }

    function updateStats(winner) {
        let wins = parseInt(document.getElementById('wins').textContent);
        let losses = parseInt(document.getElementById('losses').textContent);

        if (winner === playerChoice) {
            wins++;
        } else if (winner !== 'D') {
            losses++;
        }

        document.getElementById('wins').textContent = wins;
        document.getElementById('losses').textContent = losses;
    }

    function resetGame() {
        document.getElementById('game-options').style.display = 'block';
        document.getElementById('game-board').style.display = 'none';
    }
});
