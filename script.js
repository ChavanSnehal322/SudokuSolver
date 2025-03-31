
/*  
	A script that connects front end with backend


*/
var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}


var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {

	// check if board is having a valid array to enter the data in it
	if (!board || !Array.isArray(board)) {
        console.error("Invalid board data received:", board);
        return;
    }

	// enter the data in the specific cells
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}

			else
				arr[i][j].innerText = ''
		}
	}
}

// fetch the buttons from .html file
let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

// request sent to api endpoint
GetPuzzle.onclick = function () {
	console.log("GetPuzzle button clicked"); // Debugging log
	var xhrRequest = new XMLHttpRequest()
	console.log("API response received"); // Debugging log

	// filled the front end board with the api response
	xhrRequest.onload = function () {
		var response = JSON.parse(xhrRequest.response)
		console.log("API Response:", response)	// Debugging log
		
		// Check if the API structure is correct
		if (response && response.newboard && response.newboard.grids && response.newboard.grids[0].value) {
			board = response.newboard.grids[0].value; // Extract the board from the API response
			console.log("Board Data:", board); // Debugging log
			FillBoard(board); // Fill the board on the frontend
		} else {
			console.error("Invalid API Response Structure:", response);
		}
	}
	// used a existing free heroku api to send the request for getting a board 
	xhrRequest.open('get', 'https://sudoku-api.vercel.app/api/dosuku')
	/* https://sugoku.herokuapp.com/board?difficulty=easy			.. not working with this api
	/ we can change the difficulty of the puzzle the allowed values of difficulty are easy, medium, hard and random */
	xhrRequest.send()
}

// function call to solve the sudoko on a button click
SolvePuzzle.onclick = () => {
	SudokuSolver(board, 0, 0, 9);
};


function isValid( board, i, j, num, n ){

	// row check
    for( let x = 0; x< n; x++)
		{
			if( board[i][x] == num)         // row already filled
			{        
				return false;
			}
		}
	
		// col check
	
		for( let x = 0; x < n; x++)
		{
			if( board[x][j] == num)         // column already filled
			{
				return false;
			}
		}
	
		// Submatrix check
		let rn = Math.sqrt(n);;
		let start_index = i - i % rn;        // getting the start row index of submatrix
		let starting_col = j - j % rn;      // getting the start column index of submatrix
	
		// looping through whole submatrix
		for( let x = start_index; x < start_index; x++)
		{
			for( let y = starting_col; y < starting_col + rn; y++)
			{
				// check if x and y is already there in submatrix
				if(board[x][y] == num)
				{
					return false;
				}
			}
		}
		return true;
	
}


function SudokuSolver( board, i, j, n) {
	// Write your Code here

	 // base case
	 if( i == n){
        // print(board, n);	
		FillBoard(board)			// function call to fill & display the oard on html page
        return true;
    }

    if( j == n){
        return SudokuSolver(board, i+ 1, 0, n);
    }

    if(board[i][j] != 0 )
    {
        return SudokuSolver(board, i, j+ 1, n);
    }

    // start fillling the cells

    for( let num = 1; num <= 9; num++)
    {
        // check if the number selected can be placed keeping it valid suduko
        if( isValid(board, i, j, num, n)){
            board[i][j] = num;

            let subAns = SudokuSolver(board, i, j+ 1, n);

            if( subAns){
                return true;
            }
            // backtracking
            board[i][j] = 0;


        }
    }
    return false;

}
